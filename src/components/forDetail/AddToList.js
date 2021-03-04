import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToAList, getMyLists } from "../../actions/listActions";

export function AddToList({ movie }) {
  const dispatch = useDispatch();

  const getListsHandler = () => {
    dispatch(getMyLists(sessionId.session_id));
  };

  const myLists = useSelector((state) => state.listFetch.myLists);
  const sessionId = useSelector((state) => state.getNewToken.sessionId);

  const addMovieToListHandler = (listId) => {
    const movieId = { media_id: movie.id };
    dispatch(addMovieToAList(listId, sessionId.session_id, movieId));
  };

  return (
    <div className="text-white p-5 mt-5">
      <div className="text-lg" onClick={getListsHandler}>
        Add <span className="underline">{movie.title}</span> to a list.
      </div>
      <div className="mt-5">
        <div>
          <p>Select list:</p>
          <div>
            <ul>
              {myLists.map((list) => (
                <li onClick={() => addMovieToListHandler(list.id)}>
                  {list.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  );
}
