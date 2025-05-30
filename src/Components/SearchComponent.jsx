// SearchComponent.jsx
import React from "react";
import { PiBroomBold } from "react-icons/pi";
import { FcSearch } from "react-icons/fc";

function SearchComponent({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-full md:w-96">
      <div className="relative flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
          className="w-full pl-10 pr-12 py-3 
            bg-slate-500/10 
            text-gray-100
            placeholder-gray-400
            rounded-xl
            outline-none
            border border-gray-700
            focus:border-sky-500
            focus:ring-2 
            focus:ring-sky-500/20
            focus:outline-none
            transition-all duration-300
            backdrop-blur-sm"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-3 p-1.5
              text-gray-400 
              hover:text-gray-100
            border-none
            outline-none
              transition-all duration-300"
            aria-label="Clear search"
          >
            <PiBroomBold className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchComponent;
