"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function PokemonDetails({ params }) {
  const { id } = params;
  const [pokemonDetails, setPokemonDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

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
    return (
      <div className="text-center text-xl mt-10">Loading Pokemon Data....</div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-xl text-red-500 mt-10">
        {error || "Error"}
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-900 text-white min-h-screen">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 bg-opacity-10 rounded-lg shadow-xl p-4 sm:p-6">
        {/* back button  */}
        <button
          className="mb-6 px-4 py-4 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition flex items-center justify-center gap-2"
          onClick={() => router.back()}
        >
          <FiArrowLeft className="text-lg" /> Back
        </button>

        <header className="text-center">
          <figure className="flex justify-center mb-4">
            <img
              src={pokemonDetails.sprites.other.dream_world.front_default}
              alt={pokemonDetails.name}
              className="w-36 h-36 sm:w-48 sm:h-48 object-contain rounded-full border-4 border-white shadow-lg"
            />
          </figure>
          <h1 className="text-3xl sm:text-4xl font-bold capitalize mt-4">
            {pokemonDetails.name}
          </h1>
          <p className="text-base sm:text-lg mt-2">
            {pokemonDetails.types.map((type) => type.type.name).join(", ")}{" "}
            Pokemon
          </p>
        </header>

        <main className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: "Height", value: `${pokemonDetails.height} dm` },
              { label: "Weight", value: `${pokemonDetails.weight} hg` },
              {
                label: "Speed",
                value: pokemonDetails.stats[5]?.base_stat || "N/A",
              },
              {
                label: "Base Experience",
                value: pokemonDetails.base_experience,
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md"
              >
                <p className="font-bold text-base sm:text-lg">{item.label}</p>
                <p className="text-sm sm:text-base">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="abilities mt-10">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Abilities</h2>
            <div className="bg-white bg-opacity-10 flex flex-wrap gap-2 sm:gap-4 p-4 rounded-lg shadow-md">
              {pokemonDetails.abilities.map((ability, index) => {
                return (
                  <div
                    key={index}
                    className="px-2 sm:px-4 py-1 sm:py-2 text-white rounded-md"
                  >
                    <p className="capitalize text-sm sm:text-base">
                      {ability.ability.name}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}
