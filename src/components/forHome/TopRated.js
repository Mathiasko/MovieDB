import { React } from "react";
import { TopRatedMovie } from "../forHome/TopRatedMovie";

export function TopRated({setMoviePage, moviePage}) {
  return (
    <div className="mr-10 flex-1">
      <h2 className="text-3xl text-green-600 text-center pt-12 font-medium">
        Top Rated
      </h2>
      <div className="flex">
        <TopRatedMovie moviePage={moviePage} setMoviePage={setMoviePage}/>
      </div>
    </div>
  );
}
