export const Search = ({ search, setSearch }) => {
    return (
      <div>
        <input
          type="text"
          placeholder="Search your favourite Pokemon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border rounded-md"
        />
      </div>
    );
  };
  