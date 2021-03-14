import { React, useEffect, useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import MovieTab from "../common/MovieTab";
import { MoviePage } from "./MoviePage";

const TopRatedMovie = ({ setMoviePage, moviePage, topRatedMovies }) => {
  const windoww = useRef(null);
  useEffect(() => {
    windoww.current.scrollTop = 0;
  });

  return (
    <div className="flex flex-col ml-6 w-full">
      <h2 className="m-auto">
        <p className="text-3xl text-blue-600 pt-12 font-medium ">All time</p>
        <MoviePage moviePage={moviePage} setMoviePage={setMoviePage} />
      </h2>
      <div ref={windoww} className="overflow-auto" style={{ height: "69vh" }}>
        {topRatedMovies ? (
          topRatedMovies.map((movie) => (
            <MovieTab
              title={movie.title}
              genreid={movie.genre_ids}
              rating={movie.vote_average}
              lang={movie.original_language}
              movieID={movie.id}
              poster={movie.poster_path}
              key={movie.id}
            />
          ))
        ) : (
          <p>Loading</p>
        )}
      </div>
    </div>
  );
};

TopRatedMovie.propTypes = {
  setMoviePage: PropTypes.func.isRequired,
  moviePage: PropTypes.number.isRequired,
  topRatedMovies: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const topRatedMovies = state.mainFetch.topRatedMovies.results;
  return { topRatedMovies };
}

const mapDispatchToProps = {};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(TopRatedMovie);
