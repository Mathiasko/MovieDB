import React from "react";
import PropTypes from "prop-types";

export function MovieProduction({movie}) {
  const logoImageUrl = "https://image.tmdb.org/t/p/w92/";
console.log(movie)
  return (
    <>
      {movie.production_companies.map((prod, index) => (
            <div className="mr-5" key={index}>
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
          ))}
    </>
  );
}

MovieProduction.propTypes = {
  movie: PropTypes.object.isRequired,
  setPersontoggle: PropTypes.func.isRequired
};
