import { React, useState } from "react";
import { connect } from "react-redux";
import { fetchListDetail, fetchMyLists } from "../../redux/actions/listActions";
import { errorHandler } from "../../helper/Notification";
import ListDetail from "./ListDetail";
import PropTypes from "prop-types";

const MyLists = ({ fetchMyLists, fetchListDetail, sessionId, myLists }) => {
  const getListsHandler = () => {
    sessionId ? fetchMyLists(sessionId) : errorHandler("Session missing");
  };

  const fetchListDetailHandler = (id) => {
    fetchListDetail(id);
    setDetailToggle(true);
  };

  const [detailToggle, setDetailToggle] = useState(false);

  return (
    <div className="relative">
      <p
        className="inline-block cursor-pointer text-white p-3  bg-gray-600 rounded-xl"
        onClick={getListsHandler}
      >
        Get my lists
      </p>
      <div className="flex">
        {myLists.map((list) => (
          <button
            key={list.id}
            className="text-white text-left p-3"
            onClick={() => fetchListDetailHandler(list.id)}
          >
            <p>Name: {list.name}</p>
            <p>Desc: {list.description}</p>
            <p>Items: {list.item_count}</p>
          </button>
        ))}
      </div>
      {detailToggle ? <ListDetail toggleDetail={setDetailToggle} /> : ""}
      <div className="absolute"></div>
    </div>
  );
};
MyLists.propTypes = {
  fetchMyLists: PropTypes.func.isRequired,
  fetchListDetail: PropTypes.func.isRequired,
  sessionId: PropTypes.string.isRequired,
  myLists: PropTypes.array.isRequired,
};

function mapStateToProps(state) {
  const sessionId = state.authenticate.sessionId.session_id;
  const myLists = state.listFetch.myLists;
  return { sessionId, myLists };
}

const mapDispatchToProps = {
  fetchMyLists,
  fetchListDetail,
};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(MyLists);
