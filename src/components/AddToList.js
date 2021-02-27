import { React } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovieToAList, getMyLists } from "../actions/listActions";

export function AddToList({ movie }) {
  const dispatch = useDispatch();

  const getListsHandler = () => {
    dispatch(getMyLists(sessionId));
  };

  const myLists = useSelector((state) => state.listFetch.myLists);
  const sessionId = useSelector((state) => state.getNewToken.sessionId.session_id);

  const addMovieToListHandler = (listId) => {
    const movieId = {media_id: movie.id}
    dispatch(addMovieToAList(listId, sessionId, movieId));
    console.log(listId, sessionId, movieId)
  };

  return (
    <div className="text-white p-5 mt-5">
      <div className="text-lg">
        <span className="underline">{movie.title}</span> is in THIS list.
      </div>
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
