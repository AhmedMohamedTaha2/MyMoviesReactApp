// MovieListComponent.jsx
import React, { useEffect, useState } from "react";
import Movie from "./MovieComponent";
import NoMovieAvailableComponent from "./NoMovieAvailableComponent";
import axios from "axios";
import ConnectionFailedComponent from "./ConnectionFailedComponent";

export default function MovieList({ 
  movies, 
  setIsOpen, 
  setSelectedMovie, 
  currentPage 
}) {
  const [detailedMovies, setDetailedMovies] = useState([]);
  const apiKey = "f5e82cc2"; // الـ API key لازم يكون موجود هنا عشان نجيب تفاصيل الأفلام
  

  useEffect(() => {
    const fetchDetailedMovies = async () => {
      if (!movies || movies.length === 0) {
        setDetailedMovies([]);
        return;
      }

      try {
        const detailedResponses = await Promise.all(
          movies.map((movie) => {
            // بنتحقق من البيانات الأساسية قبل ما نبعت الطلب
            if (!movie.imdbID || !movie.Title || !movie.Year) {
              console.warn("Movie data is incomplete, skipping:", movie);
              return null; // بنرجع null للمفروض يتفلتر بعدين
            }
            return axios.get(
              `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=${apiKey}`
            );
          })
        );

        // بنفلتر أي ردود null أو غير ناجحة
        const validDetails = detailedResponses
          .filter((res) => res && res.data && res.data.Response === "True")
          .map((res) => res.data);

        setDetailedMovies(validDetails);

      } catch (error) {
        console.error("Error fetching detailed movie data:", error);
        <ConnectionFailedComponent />; // لو حصل خطأ في الاتصال، بنعرض رسالة الخطأ
        setDetailedMovies([]); // بنمسح الأفلام لو حصل خطأ
      }
    };

    // Reset detailed movies when page changes
    setDetailedMovies([]);
    fetchDetailedMovies();
  }, [movies, apiKey, currentPage]); // Add currentPage to dependencies

  return (
    <>
      {detailedMovies.length === 0 ? (
        <NoMovieAvailableComponent />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full px-4 place-items-center">
          {detailedMovies.map((movie) => (
            <Movie
              key={movie.imdbID}
              movie={movie}
              setIsOpen={setIsOpen}
              setSelectedMovie={setSelectedMovie}
            />
          ))}
        </div>
      )}
    </>
  );
}