"use client";

import React from "react";

const Filter = ({ selectedType, setSelectedType, pokemonTypeList }) => {
  return (
    <div className="mb-6">
      <label className="mr-2" htmlFor="typeFilter">
        Filter by Type:
      </label>
      <select
        id="typeFilter"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
        className="px-4 py-2 border rounded text-black"
      >
        <option value="">All Types</option>
        {pokemonTypeList.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
