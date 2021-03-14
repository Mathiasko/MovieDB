import React from "react";
import PropTypes from "prop-types";

export function MoviePage({ setMoviePage, moviePage }) {
  const pageUp = () => {
    setMoviePage(moviePage + 1);
  };

  const pageDown = () => {
    if (moviePage > 1) {
      setMoviePage(moviePage - 1);
    }
  };

  return (
    <div className="flex text-white text-2xl ">
      <button className="p-3" onClick={pageDown}>
        {" "}
        -{" "}
      </button>
      <p className="p-3">{moviePage}</p>
      <button className="p-3" onClick={pageUp}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}

MoviePage.propTypes = {
  setMoviePage: PropTypes.func.isRequired,
  moviePage: PropTypes.number.isRequired,
};
