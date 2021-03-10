import { React, useState } from "react";
import { connect, useSelector } from "react-redux";
import { addMovieToAList, getMyLists } from "../../redux/actions/listActions";
import { errorHandler } from "../../helper/Notification";
import PropTypes from "prop-types";

const AddToList =({ movie, getMyLists, addMovieToAList }) => {
  const getListsHandler = () => {
    sessionId.session_id ? successAdd() : errorHandler("Session missing");
  };

  function successAdd() {
    getMyLists(sessionId.session_id);
    setAddToList(true);
  }

  const myLists = useSelector((state) => state.listFetch.myLists);
  const sessionId = useSelector((state) => state.getNewToken.sessionId);

  const addMovieToListHandler = (listId) => {
    const movieId = { media_id: movie.id };
    addMovieToAList(listId, sessionId.session_id, movieId);
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
}

AddToList.propTypes = {
  movie: PropTypes.object.isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  getMyLists: PropTypes.func.isRequired,
  addMovieToAList: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  getMyLists,
  addMovieToAList,
};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(AddToList);
