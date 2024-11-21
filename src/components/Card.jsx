
export const Card = ({ pokemonData }) => {

  return (
    <li className=" p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg shadow-lg hover:scale-105 transition-transform text-white">
      <figure className="flex justify-center mb-4">
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className=" w-36 h-36 object-cover rounded-full border-4 border-white shadow-lg"
        />
      </figure>
      <h1 className="text-xl font-bold text-center capitalize mb-2">
        {pokemonData.name}
      </h1>
      <p className=" text-center text-sm italic mb-4">
        {pokemonData.types.map((type) => type.type.name).join(", ")} type
        Pokemon
      </p>
      <button
        className="view-details-btn w-full bg-white text-blue-600 font-bold py-2 rounded-lg hover:bg-gray-200"
      >
        View Details
      </button>
    </li>
  );
};
