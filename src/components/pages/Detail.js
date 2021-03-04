import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { MovieTab } from "../common/MovieTab";
import { PersonDetail } from "../forDetail/PersonDetail";
import { useParams } from "react-router-dom";
import {
  detailFetch,
  externalIdsFetch,
  movieCastFetch,
  movieRecommendationFetch,
  reviewsFetch,
} from "../../actions/detailAction";
import { Review } from "../forDetail/Review";
import { AddToList } from "../forDetail/AddToList";
import { MovieProduction } from "../forDetail/MovieProdiction";
import { ExternalIds } from "../forDetail/ExternalIds";
import { MovieCast } from "../forDetail/MovieCast";
import { MovieMeta } from "../forDetail/MovieMeta";

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

  const dispatch = useDispatch();

  console.log(personToggle);

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
            <AddToList movie={movie} />
          </div>
          <div className="ml-10 mt-5 flex-1">
           <MovieMeta movie={movie}/>
            <div className="text-white text-xl mt-10">
              <p>Production:</p>

              <div className="flex mt-5">
                <MovieProduction movie={movie} />
              </div>
            </div>
            <div className="text-white text-xl mt-10">
              <p>External</p>
              <ExternalIds externalIds={externalIds} />
            </div>
            <div className="text-white w-2/3   absolute text-base mt-10 whitespace-nowrap overflow-auto">
              <MovieCast
                movieCast={movieCast}
                setPersontoggle={setPersontoggle}
              />
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
                    <div className=" mr-5 inline-block ">
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
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Detail;
