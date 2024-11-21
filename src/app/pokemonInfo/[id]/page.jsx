'use client';

import { useEffect, useState } from "react";

export default function PokemonDetails({ params }) {
  const { id } = params;
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (!response.ok) {
          throw new Error("No Details Found.");
        }
        const data = await response.json();
        setPokemonDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getPokemonDetails();
  }, [id]);

  if (loading) {
    return <div className="text-center text-xl mt-10">Loading Pokemon Data....</div>;
  }

  if (error) {
    return (
      <div className="text-center text-xl text-red-500 mt-10">
        {error || "Error"}
      </div>
    );
  }

  return (
    <section className=" py-12 bg-gray-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-opacity-10 rounded-lg shadow-xl p-6">
        <header className="text-center">
          <figure className="flex justify-center mb-4">
            <img
              src={pokemonDetails.sprites.other.dream_world.front_default}
              alt={pokemonDetails.name}
              className=" w-48 h-48 object-cover rounded-full border-4 border-white shadow-lg"
            />
          </figure>
          <h1 className=" text-4xl font-bold capitalize mt-4">
            {pokemonDetails.name}
          </h1>
          <p className=" text-lg italic mt-2">
            {pokemonDetails.types.map((type) => type.type.name).join(", ")} Pokemon
          </p>
        </header>

        <main className="mt-8">
          <div className="grid grid-cols-4 gap-6 text-center">
            {[
              { label: "Height", value: `${pokemonDetails.height} dm` },
              { label: "Weight", value: `${pokemonDetails.weight} hg` },
              { label: "Speed", value: pokemonDetails.stats[5]?.base_stat || "N/A" },
              { label: "Base Experience", value: pokemonDetails.base_experience },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md"
              >
                <p className="font-bold text-lg">{item.label}</p>
                <p>{item.value}</p>
              </div>
            ))}
          </div>

          <div className="abilities mt-10">
            <h2 className="text-2xl font-bold mb-4">Abilities</h2>
            <div className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md">
              {pokemonDetails.abilities.map((ability) => ability.ability.name).join(", ")}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
