import React from "react";
import MovieCard from "./MovieCard";

function Movies() {
  return (
    <div>
      <div className="p-4">
        <h4 className="text-center font-bold">Trending Movies</h4>
      </div>
      <div className="flex flex-row justify-around flex-wrap">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
}

export default Movies;
