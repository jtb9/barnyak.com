// const fetch = require('node-fetch');
// const fs = require('fs');
// const path = require('path');
import path from 'path';
import fs from 'fs';
import fetch from 'node-fetch';
import axios from 'axios';
import axiosRetry from 'axios-retry';
axiosRetry(axios, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon?limit=10000';

async function fetchAllPokemon() {
  const response = await axios.get(POKEAPI_URL, { timeout: 10000 });
  return response.data.results;
}

async function fetchPokemonDetails(url) {
  const response = await axios.get(url, { timeout: 10000 });
  return response.data;
}

async function fetchEvolutionChain(url) {
  const response = await axios.get(url, { timeout: 10000 });
  return response.data.chain;
}

async function getEvolutionChainData(chain) {
  const evolutionChain = [];
  let currentStage = chain;

  while (currentStage) {
    evolutionChain.push({
      species_name: currentStage.species.name,
      evolves_to: currentStage.evolves_to.map(e => e.species.name),
    });
    currentStage = currentStage.evolves_to[0];
  }

  return evolutionChain;
}

async function main() {
  try {
    const pokemonList = await fetchAllPokemon();
    const pokemonDetailsPromises = pokemonList.map(pokemon => fetchPokemonDetails(pokemon.url));

    const pokemonDetails = await Promise.all(pokemonDetailsPromises);

    // Fetch evolution chain data
    const speciesPromises = pokemonDetails.map(pokemon => fetchPokemonDetails(pokemon.species.url));
    const speciesDetails = await Promise.all(speciesPromises);

    const evolutionPromises = speciesDetails.map(species => fetchEvolutionChain(species.evolution_chain.url));
    const evolutionChains = await Promise.all(evolutionPromises);

    const evolutionChainDataPromises = evolutionChains.map(chain => getEvolutionChainData(chain));
    const evolutionChainData = await Promise.all(evolutionChainDataPromises);

    // Combine evolution data with Pokémon details
    const combinedData = pokemonDetails.map((pokemon, index) => ({
      ...pokemon,
      evolution_chain: evolutionChainData[index],
    }));

    const outputPath = 'pokemon_details_with_evolutions.json';

    fs.writeFileSync(outputPath, JSON.stringify(combinedData, null, 2));
    console.log(`Successfully saved Pokémon details with evolutions to ${outputPath}`);
  } catch (error) {
    console.error('Error fetching Pokémon details:', error);
  }
}

main();
