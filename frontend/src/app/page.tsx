"use client";
import "./App.css";
import Blog from "./Components/Blog";

export default function Home() {
  return (
    <Blog />
  );
}

export async function generateStaticParams() {
  return [];
}
