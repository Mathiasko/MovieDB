import { React } from "react";
import { Link } from "react-router-dom";
import { clearMovieDetail } from "../../actions/detailAction";
import { useDispatch, useSelector } from "react-redux";
import { starRating } from "../../helper/starsRating";
import { removeMoveFromList } from "../../actions/listActions";

export function MovieTab({
  title,
  genreid,
  rating,
  lang,
  movieID,
  poster,
  remove,
  listId,
}) {
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

  const dispatch = useDispatch();

  const clearDetailHandler = () => {
    dispatch(clearMovieDetail());
  };
  const sessionId = useSelector((state) => state.getNewToken.sessionId);

  const removeMovieHandler=()=> {
    const payload={media_id:movieID}
    dispatch(
      removeMoveFromList(listId, sessionId.session_id, payload)
    )
    console.log('dasdojb')
  }

  return (
    <div className="relative" >
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
                  genreid.map((data, index) => (
                    <p className="ml-2" key={index}>
                      {genre(data)}{" "}
                    </p>
                  ))
                ) : (
                  <p></p>
                )}
              </div>

              <p>Rating: {starRating(rating)}</p>

              <p>Language: {lang.toUpperCase()}</p>
            </div>
          </div>
        </div>
      </Link>
      {remove ? (
        <div>
          <button
            className="absolute top-10 -right-0 p-5 cursor-pointer"
            onClick={removeMovieHandler}
          >
            ╳
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
