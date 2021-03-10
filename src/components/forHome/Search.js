import { React, useState } from "react";
import { connect, useSelector } from "react-redux";
import { searchMovie }  from "../../redux/actions/searchMovieAction";
import MovieTab from "../common/MovieTab";
import PropTypes from 'prop-types'


const Search = ({searchMovie})=> {
  const [input, setInput] = useState("");

  const changeHandler = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) =>{
    e.preventDefault();
    searchMovie(input)
  }

  const  results  = useSelector((state) => state.searchMovie);


  return (
    <div className="mr-10 flex-1">
      <form className="m-8 mt-28" onSubmit={handleSubmit}>
        <label className='text-white'>
          Search movie:
          <input className='py-1 px-2 ml ml-5 outline-none text-black' type="text" value={input} onChange={changeHandler} />
        </label>
        <input type="submit" className="ml-2 py-1 px-2" value="Submit" />
      </form>
      <div className="overflow-auto" style={{ height: "74vh" }} >
          {results ? results.map((movie)=>(
              <MovieTab title={movie.title} genreid={movie.genre_ids} rating={movie.vote_average} lang={movie.original_language} movieID={movie.id} poster={movie.poster_path} key={movie.id}/>
          )): ''}
      </div>
    </div>
  );
}

Search.propTypes={
  searchMovie: PropTypes.func.isRequired,
}


function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  searchMovie
};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(Search);
