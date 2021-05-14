import { React, useState } from "react";
import { connect } from "react-redux";
import MovieTab from "../common/MovieTab";
import PropTypes from "prop-types";
import { deleteThisList } from "../../redux/actions/listActions";


const ListDetail = ({ toggleDetail, list, sessionId, deleteThisList }) => {
  const [editList, setEditList] = useState(false);

  const deleteList = (listId) =>{
    console.log(listId);
    deleteThisList(listId, sessionId)
  }

  return (
    <div className="relative text-white bg-opacity-40 bg-indigo-600 p-5">
      <p
        className="absolute p-4 right-1 top-0 cursor-pointer"
        onClick={() => toggleDetail(false)}
      >
        ╳
      </p>
      <p
        className="absolute p-4 right-1 top-8 cursor-pointer"
        onClick={() => setEditList(!editList)}
      >
        Edit list
      </p>
      {list ? (
        <div>
          <div className="flex flex-col mb-5">
            <p className="text-xl">{list.name}</p>
            <p className="text-lg">{list.description}</p>
          </div>
          {editList ? <div onClick={() => deleteList(list.id)} className=""> Delte this list</div> : ""}
          <div>
            {list.items
              ? list.items.map((movie) => (
                  <MovieTab
                    title={movie.title}
                    genreid={movie.genre_ids}
                    rating={movie.vote_average}
                    lang={movie.original_language}
                    movieID={movie.id}
                    poster={movie.poster_path}
                    remove={editList}
                    listId={list.id}
                    key={movie.id}
                  />
                ))
              : ""}
          </div>
        </div>
      ) : (
        "loading"
      )}
    </div>
  );
};

ListDetail.propTypes = {
  toggleDetail: PropTypes.func.isRequired,
  deleteThisList: PropTypes.func.isRequired,
  sessionId: PropTypes.string,
  list: PropTypes.object,
};

function mapStateToProps(state) {
  const list = state.listFetch.listDetail;
  const sessionId = state.authenticate.sessionId.session_id
  return { list, sessionId };
}

const mapDispatchToProps = {deleteThisList};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(ListDetail);
