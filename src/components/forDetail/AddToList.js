import { React, useState } from "react";
import { connect } from "react-redux";
import { addMovieToAList, fetchMyLists } from "../../redux/actions/listActions";
import { errorHandler } from "../../helper/Notification";
import PropTypes from "prop-types";

const AddToList = ({
  movie,
  fetchMyLists,
  addMovieToAList,
  sessionId,
  myLists,
}) => {
  const getListsHandler = () => {
    sessionId ? successAdd() : errorHandler("Session missing");
  };

  function successAdd() {
    fetchMyLists(sessionId);
    setAddToList(true);
  }

  const addMovieToListHandler = (listId) => {
    const movieId = { media_id: movie.id };
    addMovieToAList(listId, sessionId, movieId);
  };

  const [addToList, setAddToList] = useState(false);

  return (
    <div className="text-white p-5 mt-5">
      <div className="text-lg" onClick={getListsHandler}>
        <button>
          Add <span className="underline">{movie.title}</span> to a list.
        </button>
      </div>
      {addToList ? (
        <div className="mt-5">
          <div>
            <p className="text-xl underline">Select list:</p>
            <div>
              <ul>
                {myLists.map((list) => (
                  <li
                    key={list.id}
                    onClick={() => addMovieToListHandler(list.id)}
                  >
                    <button className="text-lg">{list.name}</button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

AddToList.propTypes = {
  movie: PropTypes.object.isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  fetchMyLists: PropTypes.func.isRequired,
  addMovieToAList: PropTypes.func.isRequired,
  sessionId: PropTypes.string,
  myLists: PropTypes.array,
};

function mapStateToProps(state) {
  const sessionId = state.authenticate.sessionId.session_id;
  const myLists = state.listFetch.myLists;
  return { sessionId, myLists };
}

const mapDispatchToProps = {
  fetchMyLists,
  addMovieToAList,
};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(AddToList);
