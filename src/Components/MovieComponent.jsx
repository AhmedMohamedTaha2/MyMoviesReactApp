// MovieComponent.jsx
import React from "react";
import ShiningButton from "./ShiningButton";
import { motion } from "framer-motion"; // You'll need to install framer-motion

function Movie({ movie, setIsOpen, setSelectedMovie }) {
  const { Title, Year, Poster, Type, imdbRating, Genre } = movie;

  const handleDetailsClick = () => {
    setIsOpen(true);
    setSelectedMovie(movie);
  };

  const fallbackPoster = "https://placehold.co/300x450/334155/cbd5e1?text=No+Image";

  const THEME = {
    colors: {
      typeColors: {
        movie: "bg-gradient-to-r from-blue-500/80 to-cyan-500/80",
        series: "bg-gradient-to-r from-purple-500/80 to-pink-500/80",
        default: "bg-gradient-to-r from-slate-500/80 to-slate-600/80",
      },
      genreColors: {
        Action: "bg-gradient-to-r from-red-500/80 to-orange-500/80",
        Drama: "bg-gradient-to-r from-amber-500/80 to-yellow-500/80",
        Comedy: "bg-gradient-to-r from-green-500/80 to-emerald-500/80",
        Horror: "bg-gradient-to-r from-pink-500/80 to-rose-500/80",
        "Sci-Fi": "bg-gradient-to-r from-indigo-500/80 to-blue-500/80",
        Romance: "bg-gradient-to-r from-rose-400/80 to-pink-500/80",
        Animation: "bg-gradient-to-r from-orange-400/80 to-amber-500/80",
        default: "bg-gradient-to-r from-slate-500/80 to-slate-600/80",
      },
    },
  };

  const genres = Genre ? Genre.split(",").map((g) => g.trim()).slice(0, 3) : [];
  const badgeColor = THEME.colors.typeColors[Type] || THEME.colors.typeColors.default;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex-grow-0 flex-shrink-0 w-full sm:w-1/2 lg:w-1/2 xl:w-1/4 p-4 mx-auto"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group relative flex flex-col h-[550px] rounded-3xl overflow-hidden 
          shadow-[0_0_15px_rgba(0,0,0,0.2)]
          hover:shadow-[0_0_30px_rgba(56,189,248,0.3)]
          hover:border-2 hover:border-sky-500/50
          transition-all duration-500"
      >
        {/* Glass morphism background with enhanced neon effect */}
        <div className="absolute inset-0 
          bg-slate-900/90 
          backdrop-blur-xl 
          border border-white/10 
          group-hover:border-sky-500/50 
          group-hover:box-shadow-[0_0_30px_rgba(56,189,248,0.3)]
          group-hover:before:content-['']
          group-hover:before:absolute 
          group-hover:before:inset-0
          group-hover:before:bg-gradient-to-r 
          group-hover:before:from-sky-500/10 
          group-hover:before:to-purple-500/10
          group-hover:before:animate-pulse
          transition-all duration-500" 
        />

        {/* Content container */}
        <div className="relative flex flex-col h-full z-10 
          group-hover:shadow-[0_0_30px_rgba(56,189,248,0.2)]">
          {/* Image section with zoom effect */}
          <div className="relative w-full aspect-[9/8] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 z-10" />
            <motion.img
              whileHover={{ scale: 1.5 }}
              transition={{ 
                duration: 0.8, 
                ease: [0.43, 0.13, 0.23, 0.96] // Custom easing for smooth transition
              }}
              src={Poster !== "N/A" && Poster ? Poster : fallbackPoster}
              alt={`${Title} Poster`}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-top
                transform transition-transform duration-800 ease-out
                group-hover:scale-110" // Fallback for non-motion devices
            />

            {/* Rating badge */}
            <div className="absolute top-3 right-3 z-20">
              <div className="backdrop-blur-md bg-black/40 px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/20">
                <span className="text-yellow-400 animate-pulse">⭐</span>
                <span className="text-white font-medium">{imdbRating ?? "N/A"}</span>
              </div>
            </div>
          </div>

          {/* Content section with enhanced hover effects */}
          <div className="flex flex-col gap-4 p-6 flex-grow 
            bg-gradient-to-t from-slate-900/90 to-transparent
            group-hover:from-slate-900/95 
            group-hover:to-slate-900/20 
            transition-all duration-500">
            
            <h3 className="text-xl font-bold leading-tight line-clamp-2 
              text-white 
              group-hover:text-sky-400 
              group-hover:text-shadow-[0_0_10px_rgba(56,189,248,0.5)]
              transition-all duration-300">
              {Title}
            </h3>

            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 backdrop-blur-sm bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                <span className="text-sky-400">📆</span>
                <span className="text-white/90 font-medium">{Year}</span>
              </div>

              <span className={`${badgeColor} px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm`}>
                {Type}
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {genres.map((genre, index) => (
                <motion.span
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className={`text-xs px-3 py-1.5 rounded-full font-medium tracking-wide backdrop-blur-sm ${
                    THEME.colors.genreColors[genre] || THEME.colors.genreColors.default
                  }`}
                >
                  {genre}
                </motion.span>
              ))}
            </div>

            <div className="mt-auto">
              <ShiningButton onClick={handleDetailsClick}>
                Watch Details
              </ShiningButton>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Movie;