'use client';

import { useState, useEffect } from "react";

export const usePokemonInfo = (limit, offset) => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  const getPokemonList = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      const pokemonList = data.results.map(async (pokemonData) => {
        const res = await fetch(pokemonData.url);
        const data = await res.json();
        return data;
      });

      const allPokemonData = await Promise.all(pokemonList);
      setPokemon(allPokemonData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    getPokemonList();
  },  [limit, offset]);

  return { pokemon, loading, error };
};

