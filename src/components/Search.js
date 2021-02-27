import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovie } from "../actions/searchMovieAction";
import { MovieTab } from "./MovieTab";


export function Search() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch()

  const changeHandler = (e) => {
 
    setInput(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    dispatch(searchMovie(input));
  }

  const { results } = useSelector((state) => state.searchMovieFetch.searchMovie);


  return (
    <div className="mr-10">
      <form className="m-8 mt-28" onSubmit={handleSubmit}>
        <label className='text-white'>
          Search movie:
          <input className='py-1 px-2 ml ml-5 outline-none text-black' type="text" value={input} onChange={changeHandler} />
        </label>
        <input type="submit" className="ml-2 py-1 px-2" value="Submit" />
      </form>
      <div >
          {results ? results.map((movie)=>(
              <MovieTab title={movie.title} genreid={movie.genre_ids} rating={movie.vote_average} lang={movie.original_language} movieID={movie.id} poster={movie.poster_path} key={movie.id}/>
          )): ''}
      </div>
    </div>
  );
}
