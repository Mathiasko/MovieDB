import { React, useEffect, useState } from "react";
import { connect } from "react-redux";

import MovieTab from "../common/MovieTab";
import { PersonDetail } from "../forDetail/PersonDetail";
import { useParams } from "react-router-dom";
import {
  detailFetch,
  externalIdsFetch,
  movieCastFetch,
  movieRecommendationFetch,
  reviewsFetch,
} from "../../redux/actions/detailAction";
import { Review } from "../forDetail/Review";
import AddToList from "../forDetail/AddToList";
// import { MovieProduction } from "../forDetail/MovieProdiction"
import { ExternalIds } from "../forDetail/ExternalIds";
import MovieCast from "../forDetail/MovieCast";
import { MovieMeta } from "../forDetail/MovieMeta";
import PropTypes from "prop-types";

const Detail = ({
  detailFetch,
  externalIdsFetch,
  movieCastFetch,
  movieRecommendationFetch,
  reviewsFetch,
  movie,
  externalIds,
  movieCast,
  movieRecommendation,
  movieReviews,
}) => {
  const movieID = useParams().id;

  useEffect(() => {
    detailFetch(movieID);
    externalIdsFetch(movieID);
    movieCastFetch(movieID);
    movieRecommendationFetch(movieID);
    reviewsFetch(movieID);
  }, [movieID]);

  const [personToggle, setPersontoggle] = useState(false);

  const posterImageUrl = "https://image.tmdb.org/t/p/w342/";

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
            <MovieMeta
              title={movie.title}
              release_date={movie.release_date}
              runtime={movie.runtime}
              vote_average={movie.vote_average}
              overview={movie.overview}
            />
            <div className="text-white text-xl mt-10">
              <p>Production:</p>

              <div className="flex mt-5">
                {/* <MovieProduction movie={movie} /> */}
              </div>
            </div>
            <div className="text-white text-xl mt-10">
              <p>External</p>
              <ExternalIds
                imdb_id={externalIds.imdb_id}
                facebook_id={externalIds.facebook_id}
                instagram_id={externalIds.instagram_id}
                twitter_id={externalIds.twitter_id}
              />
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
                      key={review.id}
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
                    <div key={movRec.id} className=" mr-5 inline-block ">
                      <MovieTab
                        title={movRec.title}
                        genreid={movRec.genre_ids}
                        rating={movRec.vote_average}
                        lang={movRec.original_language}
                        movieID={movRec.id}
                        poster={movRec.poster_path}
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
};

Detail.propTypes = {
  detailFetch: PropTypes.func.isRequired,
  externalIdsFetch: PropTypes.func.isRequired,
  movieCastFetch: PropTypes.func.isRequired,
  movieRecommendationFetch: PropTypes.func.isRequired,
  reviewsFetch: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  externalIds: PropTypes.object.isRequired,
  movieCast: PropTypes.object.isRequired,
  movieRecommendation: PropTypes.object.isRequired,
  movieReviews: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const movie = state.detailFetch.movieDetail;
  const externalIds = state.detailFetch.externalIds;
  const movieCast = state.detailFetch.movieCast;
  const movieRecommendation = state.detailFetch.movieRecommendation;
  const movieReviews = state.detailFetch.movieReviews;
  return { movie, externalIds, movieCast, movieRecommendation, movieReviews };
}

const mapDispatchToProps = {
  detailFetch,
  externalIdsFetch,
  movieCastFetch,
  movieRecommendationFetch,
  reviewsFetch,
};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(Detail);
