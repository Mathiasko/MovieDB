import { React } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const PersonDetail = ({ closeWindow, person }) => {
  const profileUrl = "https://image.tmdb.org/t/p/h632/";

  const closeWindowHandler = () => {
    closeWindow(false);
  };

  return (
    <>
    {person ? (
      <div className="relative w-2/3  bg-gray-700 text-gray-400">
      <div className="absolute top-0 right-0 ">
        <button
          className="cursor-pointer text-3xl p-5 px-8"
          onClick={closeWindowHandler}
        >
          ╳
        </button>
      </div>
      <div className="flex">
        <div className="w-80 m-5">
          <img
            className=""
            src={profileUrl + person.profile_path}
            alt="profile Pic"
          />
        </div>
        <div className="flex-1 p-5">
          <div>
            <p>{person.name}</p>
            <p>{person.known_for_department}</p>
            <p>{person.birthday}</p>
            <p>{person.deathday ? person.deathday : ""}</p>
            <p>{person.place_of_birth}</p>
          </div>
          <div>
            <p>{person.homepage ? person.homepage : ""}</p>
            {person.imdb_id ? (
              <a
                href={`https://www.imdb.com/name/${person.imdb_id}`}
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
          </div>
          <div>
            <p className="h-72 mt-12 overflow-auto">{person.biography}</p>
          </div>
        </div>
      </div>
    </div>
    ) : ''}
    </>
  );
};

PersonDetail.propTypes = {
  closeWindow: PropTypes.func.isRequired,
  person: PropTypes.object,
};

function mapStateToProps(state) {
  const person = state.personFetch.personDetail;
  return { person };
}

const mapDispatchToProps = {};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(PersonDetail);
