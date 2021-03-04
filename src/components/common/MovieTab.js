import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { clearMovieDetail } from "../../actions/detailAction";
import { useDispatch } from "react-redux";
import { starRating } from "../../helper/starsRating";


export function MovieTab({ title, genreid, rating, lang, movieID, poster }) {
  const genre = (id) => {
    switch (id) {
      case 28:
        return "Action";

      case 12:
        return "Adventure";

      case 16:
        return "Animation";

      case 35:
        return "Comedy";

      case 80:
        return "Crime";

      case 99:
        return "Documentary";

      case 18:
        return "Drama";

      case 10751:
        return "Family";

      case 14:
        return "Fantasy";

      case 36:
        return "History";

      case 27:
        return "Horror";

      case 10402:
        return "Music";

      case 9648:
        return "Mystery";

      case 10749:
        return "Romance";

      case 878:
        return "Science Fiction";

      case 10770:
        return "TV Movie";

      case 53:
        return "Thriller";

      case 10752:
        return "War";

      case 37:
        return "Western";

      case 10759:
        return "Action & Adventure";

      case 10765:
        return "Sci-Fi & Fantasy";

      default:
        return id;
    }
  };

  const posterImageUrl = "https://image.tmdb.org/t/p/w92/";

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const dispatch = useDispatch()

  const clearDetailHandler=()=> {
    dispatch(clearMovieDetail());
  }

  return (
    <Link to={`/detail/${movieID}`} onClick={clearDetailHandler}>
      <div className="flex my-2 bg-green-900" >
        <div>
          <img className="m-3" src={posterImageUrl + poster} alt="poster" />
        </div>
        <div className=" mt-3">
          <h2 className="text-xl text-blue-600 w-96 font-medium">{title}</h2>
          <div>
            <p className="float-left mr-1">Genres:</p>
            <div className="inline-flex">
              {genreid ? (
                genreid.map((data, index) => <p className="ml-2" key={index}>{genre(data)} </p>)
              ) : (
                <p></p>
              )}
            </div>

            <p>
              Rating: {starRating(rating)}{rating/2}
            </p>

            <p>Language: {lang.toUpperCase()}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
