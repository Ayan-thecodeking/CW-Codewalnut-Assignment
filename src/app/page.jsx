"use client";

import { useState } from "react";
import { usePokemonInfo } from "@/hooks/usePokemonInfo";
import { Search } from "@/components/pokemon/Search";
import { Card } from "@/components/pokemon/Card";
import Filter from "@/components/pokemon/Filter";

export default function PokemonPage() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const itemsPerPage = 20;

  const offset = (currentPage - 1) * itemsPerPage;

  const { pokemon, loading, error } = usePokemonInfo(itemsPerPage, offset);

  console.log(pokemon);
  const pokemonFilteredList = pokemon.filter((pokemon) => {
    const isNameMatch = pokemon.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const isTypeMatch =
      !selectedType ||
      pokemon.types.some((type) => type.type.name === selectedType);

    return isNameMatch && isTypeMatch;
  });

  const pokemonTypeList = [
    ...new Set(
      pokemon.flatMap((pokemon) => pokemon.types.map((type) => type.type.name)),
    ),
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedType("");
  };

  if (loading) {
    return <div className="text-center mt-10 text-xl">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center mt-10 text-red-500">
        {error.message || "Something went wrong"}
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-between mb-6 mx-12">
        {/* Search Component */}
        <div className="w-full sm:w-1/2 mb-4 sm:mb-0 sm:mr-4">
          <Search search={search} setSearch={setSearch} />
        </div>

        {/* Filter Component */}
        <div className="w-full sm:w-auto">
          <Filter
            selectedType={selectedType}
            setSelectedType={setSelectedType}
            pokemonTypeList={pokemonTypeList}
          />
        </div>
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

      {/* pagination */}

      <div className="flex justify-center mt-8">
        <button
          className={`px-4 py-2 bg-indigo-600 rounded mr-2 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded"
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </main>
  );
}
