import { starRating } from "../../helper/starsRating";
export function MovieMeta({movie}) {
  return (
    <>
      <p className="text-white text-2xl mb-5">{movie.title}</p>
      <p className="text-white text-xl mb-2">
        {movie.release_date ? movie.release_date.substring(0, 4) : ""}
      </p>
      <div className="flex">
        <p className="text-white text-xl">{movie.runtime} min</p>
        <p className="text-white text-xl ml-5 mb-2">
          {movie.vote_average * 10}%
        </p>
      </div>
      <p className="text-white text-xl ">
        Rating: {starRating(movie.vote_average)}
      </p>
      <p className="text-white text-xl mt-5 w-2/3">{movie.overview}</p>
    </>
  );
}
