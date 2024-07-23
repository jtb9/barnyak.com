import React, { useState, useEffect, useMemo } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Container, CircularProgress, Grid, Card, Typography, Stack, Dialog, LinearProgress, Table, TableCell, TableHead, TableRow, TableBody, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonForm {
  name: string;
  url: string;
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonMove {
  move: {
    name: string;
    url: string;
  };
  version_group_details: {
    level_learned_at: number;
    version_group: {
      name: string;
      url: string;
    };
    move_learn_method: {
      name: string;
      url: string;
    };
  }[];
}

export interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string | null;
  back_shiny: string | null;
  back_female: string | null;
  back_shiny_female: string | null;
  // There are more sprite variations available in the API
}

export interface PokemonoEvolutionChain {
  species_name: string;
  evolves_to: string[];
}

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: PokemonForm[];
  game_indices: {
    game_index: number;
    version: {
      name: string;
      url: string;
    };
  }[];
  held_items: {
    item: {
      name: string;
      url: string;
    };
    version_details: {
      rarity: number;
      version: {
        name: string;
        url: string;
      };
    }[];
  }[];
  location_area_encounters: string;
  moves: PokemonMove[];
  species: {
    name: string;
    url: string;
  };
  evolution_chain: PokemonoEvolutionChain[];
  sprites: PokemonSprites;
  stats: PokemonStat[];
  types: PokemonType[];
  past_types: {
    generation: {
      name: string;
      url: string;
    };
    types: PokemonType[];
  }[];
}

const Pokedex: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [_pokemonDetails, setPokemonDetails] = useState<Pokemon[]>([]);
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | undefined>(undefined);
  const [searchFilter, setSearchFilter] = useState("");
  const [searchFilterTemp, setSearchFilterTemp] = useState("");

  //@ts-ignore
  const pokemonList: Pokemon[] = () => {
    return filteredPokemon;
  }

  useEffect(() => {
    let pokemon: Pokemon[] = [];

    if (searchFilter === "") {
      setFilteredPokemon(_pokemonDetails);
    }
    else {
      for (let i = 0; i < _pokemonDetails.length; i++) {
        let match = false;

        if (_pokemonDetails[i].name.toLowerCase().includes(searchFilter.toLowerCase())) {
          pokemon.push(_pokemonDetails[i]);
          match = true;
        }

        if (match === false) {
          for (let t = 0; t < _pokemonDetails[i].types.length; t++) {
            if (_pokemonDetails[i].types[t].type.name.toLowerCase().includes(searchFilter.toLowerCase())) {
              if (match === false) {
                pokemon.push(_pokemonDetails[i]);
                match = true;
              }
            }
          }
        }
      }

      setFilteredPokemon(pokemon);
    }
  }, [searchFilter]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchFilter(searchFilterTemp);
    }, 300);

    // Cleanup the timeout if the component is unmounted or if searchTerm changes
    return () => {
      clearTimeout(handler);
    };
  }, [searchFilterTemp]);

  //@ts-ignore
  const pokemonDetails: Pokemon[] = pokemonList();

  useEffect(() => {
    async function getData() {
      const body = await fetch("pokemon_details.json");
      const results = await body.json();

      setPokemonDetails(results);
      setFilteredPokemon(results);
      setSearchFilter("");
      setLoading(false);
    }

    getData();
  }, []);

  const renderType2 = (type: string) => {
    const typeColors: { [key: string]: string } = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC',
    };

    let sx = {
      borderRadius: '9px',
      padding: '3px',
      color: 'black',
      fontSize: '0.8rem',
      backgroundColor: typeColors[type] || 'grey',
    }

    return <Typography sx={sx}>{type}</Typography>
  }

  const renderType = (type: string) => {
    const typeColors: { [key: string]: string } = {
      normal: '#A8A878',
      fire: '#F08030',
      water: '#6890F0',
      electric: '#F8D030',
      grass: '#78C850',
      ice: '#98D8D8',
      fighting: '#C03028',
      poison: '#A040A0',
      ground: '#E0C068',
      flying: '#A890F0',
      psychic: '#F85888',
      bug: '#A8B820',
      rock: '#B8A038',
      ghost: '#705898',
      dragon: '#7038F8',
      dark: '#705848',
      steel: '#B8B8D0',
      fairy: '#EE99AC',
    };

    let sx = {
      borderRadius: '9px',
      padding: '3px',
      color: 'black',
      backgroundColor: typeColors[type] || 'grey',
    }

    return <Typography sx={sx}>{type}</Typography>
  }

  const renderTypes2 = (blob: Pokemon) => {
    let types = [];

    for (let i = 0; i < blob.types.length; i++) {
      types.push(renderType2(blob.types[i].type.name))
    }

    if (types.length === 1) {
      types.push(renderType2("-"));
    }

    return <Stack spacing={1} alignContent={"center"} alignItems={"center"} justifyContent={"center"} direction="row">
      {types}
    </Stack>
  }

  const renderTypes = (blob: Pokemon) => {
    let types = [];

    for (let i = 0; i < blob.types.length; i++) {
      types.push(renderType(blob.types[i].type.name))
    }

    return <Stack spacing={2} alignContent={"center"} alignItems={"center"} justifyContent={"center"} direction="row">
      {types}
    </Stack>
  }

  const renderAbilities = (blob: Pokemon) => {
    let abl = [];

    for (let i = 0; i < blob.abilities.length; i++) {
      abl.push(
        <TableRow
          key={blob.moves[i].move.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <Typography>{blob.abilities[i].ability.name}</Typography>
          </TableCell>
          <TableCell component="th" scope="row">
            <Typography>{blob.abilities[i].is_hidden.toString()}</Typography>
          </TableCell>
        </TableRow>
      )
    }

    return <Table sx={{ marginTop: '10px' }} aria-label="moves table">
      <TableHead sx={{ backgroundColor: '#20193a' }}>
        <TableRow>
          <TableCell><div style={{ fontWeight: 'bold', color: 'white' }}>Ability</div></TableCell>
          <TableCell><div style={{ fontWeight: 'bold', color: 'white' }}>Hidden</div></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {abl}
      </TableBody>
    </Table>
  }

  const renderEveltions = (blob: Pokemon) => {
    let evolve = [];

    for (let i = 0; i < blob.evolution_chain.length; i++) {
      let evolvesTo = blob.evolution_chain[i].evolves_to.join(",");

      evolve.push(
        <TableRow
          key={blob.moves[i].move.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <Typography>{blob.evolution_chain[i].species_name}</Typography>
          </TableCell>
          <TableCell component="th" scope="row">
            <Typography>{evolvesTo}</Typography>
          </TableCell>
        </TableRow>
      )
    }

    return <Table sx={{ marginTop: '10px' }} aria-label="moves table">
      <TableHead sx={{ backgroundColor: '#20193a' }}>
        <TableRow>
          <TableCell><div style={{ fontWeight: 'bold', color: 'white' }}>From</div></TableCell>
          <TableCell><div style={{ fontWeight: 'bold', color: 'white' }}>To</div></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {evolve}
      </TableBody>
    </Table>
  }

  const renderMoves = (blob: Pokemon) => {
    let types = [];

    for (let i = 0; i < blob.moves.length; i++) {
      let levels = [];

      for (let c = 0; c < blob.moves[i].version_group_details.length; c++) {
        levels.push(blob.moves[i].version_group_details[c].level_learned_at);
      }

      levels.sort((a, b) => {
        return b - a
      })

      types.push(
        <TableRow
          key={blob.moves[i].move.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            <Typography>{blob.moves[i].move.name}</Typography>
          </TableCell>
          <TableCell component="th" scope="row">
            <Typography>{levels[0]}</Typography>
          </TableCell>
        </TableRow>
      )
    }

    return <Table sx={{ marginTop: '10px' }} aria-label="moves table">
      <TableHead sx={{ backgroundColor: '#20193a' }}>
        <TableRow>
          <TableCell><div style={{ fontWeight: 'bold', color: 'white' }}>Move</div></TableCell>
          <TableCell><div style={{ fontWeight: 'bold', color: 'white' }}>Level</div></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {types}
      </TableBody>
    </Table>
  }

  const renderSingle = (blob: Pokemon) => {
    return <Grid item sm={3} lg={0.8} md={1} xs={6}>
      <Card onClick={() => {
        setSelectedPokemon(blob);
      }} className="pokemonCard" sx={{ paddingBottom: '15px', position: 'relative' }}>
        <Typography sx={{ backgroundColor: '#090712', padding: '3px', paddingLeft: '15px' }}>#{blob.order}<br />{blob.name}</Typography>
        <Stack direction="column">
          <Stack sx={{ paddingTop: '5px' }} alignContent={"center"} alignItems={"center"} justifyContent={"center"} direction="row">
          </Stack>
          <Stack justifyContent={"center"} direction="row">
            <img style={{ maxWidth: '80px' }} src={blob.sprites.front_default!} alt="pokemon sprite" />
          </Stack>
          {renderTypes2(blob)}
        </Stack>
      </Card>
    </Grid>
  }

  //@ts-ignore
  const renderPokemon = useMemo(() => {
    let pkmns = [];

    for (let i = 0; i < pokemonDetails.length; i++) {
      pkmns.push(renderSingle(pokemonDetails[i]));
    }

    return <Grid container spacing={2}>{pkmns}</Grid>
  }, [pokemonDetails]);

  const renderPokemonDialog = (blob: Pokemon) => {
    if (blob === undefined) {
      return <span />
    }

    return <Stack sx={{ padding: '15px' }} direction="column">
      <Stack direction="row">
        <img src={blob.sprites.front_default!} alt="front_default" />
        <img src={blob.sprites.back_default!} alt="front_default" />
        <img src={blob.sprites.front_shiny!} alt="front_default" />
        <img src={blob.sprites.back_shiny!} alt="front_default" />
      </Stack>
      <Stack direction="row">
        <Stack direction="column" sx={{paddingRight: '20px'}}>
          <Typography>Name: {blob.name}</Typography>
          {renderTypes(blob)}
          <Typography>#: {blob.order}</Typography>
          <Typography>Height: {blob.height}</Typography>
          <Typography>Weight: {blob.weight}</Typography>
          <Typography>Species: {blob.species.name}</Typography>
          <Typography>XP: {blob.base_experience}</Typography>
        </Stack>
        <Stack direction="column">
          {renderAbilities(blob)}
          {renderEveltions(blob)}
          {renderMoves(blob)}</Stack>
      </Stack>


    </Stack>
  }

  return (
    <div className='pokedex'>
      <Dialog
        className='pokedexDialog'
        open={(selectedPokemon !== undefined)}
        onClose={() => {
          setSelectedPokemon(undefined);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {renderPokemonDialog(selectedPokemon!)}
      </Dialog>

      {loading ? (
        <Stack sx={{ width: '100%' }} justifyContent={"center"} direction="column"><Stack sx={{ width: '100%' }} justifyContent={"center"} direction="row"><LinearProgress sx={{ width: '100%' }} /></Stack></Stack>
      ) : (
        <Stack direction="column">
          <TextField
            sx={{ '& input': { color: 'white' }, '& fieldset': { borderColor: 'white' } }}
            variant="outlined"
            value={searchFilterTemp}
            onChange={(e) => {
              setSearchFilterTemp(e.target.value)
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: 'white' }} />
                </InputAdornment>
              ),
            }}
          />
          {renderPokemon}
        </Stack>
      )}
    </div>
  );
};

export default Pokedex;
