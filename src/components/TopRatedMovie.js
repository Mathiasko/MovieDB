import { React } from "react";
import { useSelector } from "react-redux";

import { MovieTab } from "./MovieTab";
export function TopRatedMovie() {

  const { topRatedMovies } = useSelector((state) => state.mainFetch);
  

  return (
    <div className="flex flex-col ml-6">
      <h2 className="text-3xl text-blue-600 text-center pt-12 font-medium">
        <p>All time</p>
      </h2>
      <div>
        {topRatedMovies ? topRatedMovies.map((movie) => (
          
          <MovieTab title={movie.title} genreid={movie.genre_ids} rating={movie.vote_average} lang={movie.original_language} movieID={movie.id} poster={movie.poster_path} key={movie.id}/>
          
        )): <p>Loading</p> }
      </div>
    </div>
  );
}
