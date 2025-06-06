// SearchComponent.jsx
import React from "react";
import { PiBroomBold } from "react-icons/pi";
import { FcSearch } from "react-icons/fc";
<<<<<<< HEAD
import { Link } from "react-router-dom";


function SearchComponent({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-full md:w-96 ">

      <div className="relative flex items-center">
        <FcSearch className="absolute left-3 text-xl text-gray-400" />
        <input
        
=======

function SearchComponent({ searchTerm, setSearchTerm }) {
  return (
    <div className="relative w-full md:w-96">
      <div className="relative flex items-center">
        <input
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search movies..."
          className="w-full pl-10 pr-12 py-3 
<<<<<<< HEAD
            bg-slate-400/10 
=======
            bg-slate-500/10 
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
            text-gray-100
            placeholder-gray-400
            rounded-xl
            outline-none
            border border-gray-700
            focus:border-sky-500
            focus:ring-2 
<<<<<<< HEAD
            focus:ring-sky-500
            focus:outline-none
            transition-all duration-300"
=======
            focus:ring-sky-500/20
            focus:outline-none
            transition-all duration-300
            backdrop-blur-sm"
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
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
<<<<<<< HEAD
               <Link
            to="/"
            className="text-white text-xl font-bold hover:text-gray-300"
            onClick={()=> setSearchTerm("")} // Reset search term on home link click
          >
            <PiBroomBold className="text-xl" />
          </Link>
=======
            <PiBroomBold className="text-xl" />
>>>>>>> ca2e8f32a12898622a9adb59fab8db3382528fe4
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchComponent;
