import { React, useState } from "react";
import { connect, useSelector } from "react-redux";
import { getListDetail, getMyLists } from "../../redux/actions/listActions";
import { errorHandler } from "../../helper/Notification";
import { ListDetail } from "./ListDetail";
import PropTypes from "prop-types";

const MyLists = ({ getMyLists, getListDetail }) => {
  const getListsHandler = () => {
    sessionId.session_id
      ? getMyLists(sessionId.session_id)
      : errorHandler("Session missing");
  };

  const sessionId = useSelector((state) => state.authenticate.sessionId);
  const myLists = useSelector((state) => state.listFetch.myLists);

  const getListDetailHandler = (id) => {
    getListDetail(id);
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
            onClick={() => getListDetailHandler(list.id)}
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
  getMyLists: PropTypes.func.isRequired,
  getListDetail: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  getMyLists,
  getListDetail,
};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(MyLists);
