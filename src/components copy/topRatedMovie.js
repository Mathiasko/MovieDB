import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTopRatedMovies } from "../actions/mainActions";

export function TopRatedMovie() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTopRatedMovies());
  });

  return (
    <div className="">
      <h2 className="text-3xl text-blue-600 text-center pt-12 font-medium">
        Movie
      </h2>
      <div>
        
      </div>
    </div>
  );
}
