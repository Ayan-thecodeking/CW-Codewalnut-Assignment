'use client';

import { useState } from 'react';
import { usePokemonInfo } from '@/hooks/usePokemonInfo';
import { Search } from '@/components/pokemon/Search';
import { Card } from '@/components/pokemon/Card';

export default function PokemonPage() {
  const { pokemon, loading, error } = usePokemonInfo();
  const [search, setSearch] = useState('');

  // Search functionality
  const pokemonFilteredList = search
    ? pokemon.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : pokemon;

  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        {error.message || 'Something went wrong'}
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Search Component */}
      <div className="mb-6">
        <Search search={search} setSearch={setSearch} />
      </div>

      {/* Rendering Pokemon List */}
      <ul className="flex flex-wrap gap-10 justify-center">
        {pokemonFilteredList.length > 0 ? (
          pokemonFilteredList.map((pokemonData) => (
            <Card key={pokemonData.id} pokemonData={pokemonData} />
          ))
        ) : (
          <div className="text-center text-gray-500 w-full">
            No Pokemon with this name exist.
          </div>
        )}
      </ul>
    </main>
  );
}
