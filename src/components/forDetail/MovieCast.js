import React from "react";
import { useDispatch } from "react-redux";
import { personDetailFetch } from "../../redux/actions/detailPersonActions";
import PropTypes from "prop-types";



export function MovieCast({movieCast, setPersontoggle}) {
    const profileUrl = "https://image.tmdb.org/t/p/w185/";

    const dispatch = useDispatch();
    
    const personDetailHandler = (personId) => {
      dispatch(personDetailFetch(personId));
      setPersontoggle(true);
    };

  return (
    <>
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
    </>
  );
}

MovieCast.propTypes = {
  movieCast: PropTypes.array.isRequired,
  setPersontoggle: PropTypes.func.isRequired
};
