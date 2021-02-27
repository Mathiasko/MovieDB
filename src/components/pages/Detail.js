import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { personDetailFetch } from "../../actions/detailPersonActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImdb,
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { MovieTab } from "../MovieTab";
import { PersonDetail } from "../PersonDetail";
import { useParams } from "react-router-dom";
import {
  detailFetch,
  externalIdsFetch,
  movieCastFetch,
  movieRecommendationFetch,
  reviewsFetch,
} from "../../actions/detailAction";
import { Review } from "../Review";
import { starRating } from "../../helper/starsRating";
import { getMyLists } from "../../actions/listActions";
import { AddToList } from "../AddToList";

function Detail() {
  const movieID = useParams().id;

  useEffect(() => {
    dispatch(detailFetch(movieID));
    dispatch(externalIdsFetch(movieID));
    dispatch(movieCastFetch(movieID));
    dispatch(movieRecommendationFetch(movieID));
    dispatch(reviewsFetch(movieID));
  }, [movieID]);

  const [personToggle, setPersontoggle] = useState(false);

  const movie = useSelector((state) => state.detailFetch.movieDetail);
  const externalIds = useSelector((state) => state.detailFetch.externalIds);
  const movieCast = useSelector((state) => state.detailFetch.movieCast);
  const movieRecommendation = useSelector(
    (state) => state.detailFetch.movieRecommendation
  );
  const movieReviews = useSelector((state) => state.detailFetch.movieReviews);

  const posterImageUrl = "https://image.tmdb.org/t/p/w342/";
  const logoImageUrl = "https://image.tmdb.org/t/p/w92/";
  const profileUrl = "https://image.tmdb.org/t/p/w185/";

  const dispatch = useDispatch();

  const personDetailHandler = (personId) => {
    dispatch(personDetailFetch(personId));
    setPersontoggle(true);
  };



  return (
    <div>
      {movie && externalIds && movieCast && movieRecommendation ? (
        <div className="p-10 flex">
          <div className="">
            <img
              className="w-full"
              src={`${posterImageUrl}${movie.poster_path}`}
              alt="Poster"
            />
            <AddToList movie={movie}/>
          </div>
          <div className="ml-10 mt-5 flex-1">
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
            <div className="text-white text-xl mt-10">
              <p>Production:</p>

              <div className="flex mt-5">
                {movie.production_companies
                  ? movie.production_companies.map((prod) => (
                      <div className="mr-5">
                        {prod.logo_path ? (
                          <div className="h-14 flex items-center" key={prod.id}>
                            <img
                              src={`${logoImageUrl + prod.logo_path}`}
                              alt="logo"
                              className="bg-white p-1"
                            />
                          </div>
                        ) : (
                          ""
                        )}

                        <div>
                          {prod.logo_path ? (
                            <p className="namew mt-5 text-sm">{prod.name}</p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
            <div className="text-white text-xl mt-10">
              <p>External</p>
              {externalIds ? (
                <div>
                  {externalIds.imdb_id ? (
                    <a
                      href={`https://www.imdb.com/title/${externalIds.imdb_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faImdb}
                        size="3x"
                        style={{ color: "#F5C518" }}
                        className="mr-2"
                      />
                    </a>
                  ) : (
                    <FontAwesomeIcon
                      icon={faImdb}
                      size="3x"
                      style={{ color: "#414141" }}
                      className="mr-2"
                    />
                  )}

                  {externalIds.facebook_id ? (
                    <a
                      href={`https://www.facebook.com/${externalIds.facebook_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faFacebookSquare}
                        size="3x"
                        style={{ color: "#2752aa" }}
                        className="mr-2"
                      />
                    </a>
                  ) : (
                    <FontAwesomeIcon
                      icon={faFacebookSquare}
                      size="3x"
                      style={{ color: "#414141" }}
                      className="mr-2"
                    />
                  )}
                  {externalIds.instagram_id ? (
                    <a
                      href={`https://www.instagram.com/${externalIds.instagram_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faInstagramSquare}
                        size="3x"
                        style={{ color: "#aa293f" }}
                        className="mr-2"
                      />
                    </a>
                  ) : (
                    <FontAwesomeIcon
                      icon={faInstagramSquare}
                      size="3x"
                      style={{ color: "#414141" }}
                      className="mr-2"
                    />
                  )}
                  {externalIds.twitter_id ? (
                    <a
                      href={`https://www.twitter.com/${externalIds.twitter_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faTwitterSquare}
                        size="3x"
                        style={{ color: "rgb(29, 161, 242)" }}
                        className="mr-2"
                      />
                    </a>
                  ) : (
                    <FontAwesomeIcon
                      icon={faTwitterSquare}
                      size="3x"
                      style={{ color: "#414141" }}
                      className="mr-2"
                    />
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="text-white w-3/4 absolute text-base mt-10 whitespace-nowrap overflow-auto">
              {movieCast
                ? movieCast.map((cast) => (
                    <div
                      className="mr-5 text-center inline-block cursor-pointer"
                      onClick={() => personDetailHandler(cast.id)}
                      key={cast.id}
                    >
                      {cast.profile_path ? (
                        <img
                          className="rounded-full h-40 w-40 object-cover"
                          src={profileUrl + cast.profile_path}
                          alt="profile"
                        />
                      ) : (
                        <img
                          className="rounded-full h-40 w-40 object-cover"
                          src={
                            "https://www.clipartkey.com/mpngs/m/100-1006688_headshot-silhouette-placeholder-image-person-free.png"
                          }
                          alt="profile"
                        />
                      )}
                      <p className="pt-3">{cast.name}</p>
                    </div>
                  ))
                : ""}
            </div>
            <div className="mt-72"></div>
            <div>
              {personToggle ? (
                <PersonDetail closeWindow={setPersontoggle} />
              ) : (
                ""
              )}
            </div>
            <div>
              {movieReviews ? (
                <div className="text-white flex flex-wrap">
                  {movieReviews.map((review) => (
                    <Review
                      name={review.author}
                      rating={review.author_details.rating}
                      review={review.content}
                      date={review.updated_at}
                    />
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="text-white">
              {movieRecommendation ? (
                <div className="flex flex-wrap">
                  {movieRecommendation.map((movRec) => (
                    <div className=" mr-10 inline-block ">
                      <MovieTab
                        title={movRec.title}
                        genreid={movRec.genre_ids}
                        rating={movRec.vote_average}
                        lang={movRec.original_language}
                        movieID={movRec.id}
                        poster={movRec.poster_path}
                        key={movRec.id}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Detail;
