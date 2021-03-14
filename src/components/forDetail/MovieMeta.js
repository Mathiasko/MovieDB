import React from "react";
import { starRating } from "../../helper/starsRating";
import PropTypes from "prop-types";
export function MovieMeta({
  title,
  release_date,
  runtime,
  vote_average,
  overview,
}) {
  return (
    <>
      <p className="text-white text-2xl mb-5">{title}</p>
      <p className="text-white text-xl mb-2">
        {release_date ? release_date.substring(0, 4) : ""}
      </p>
      <div className="flex">
        <p className="text-white text-xl">{runtime} min</p>
        <p className="text-white text-xl ml-5 mb-2">{vote_average * 10}%</p>
      </div>
      <p className="text-white text-xl ">Rating: {starRating(vote_average)}</p>
      <p className="text-white text-xl mt-5 w-2/3">{overview}</p>
    </>
  );
}

MovieMeta.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  runtime: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string.isRequired,
};
