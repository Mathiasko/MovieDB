import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListDetail, getMyLists } from "../../actions/listActions";
import { ListDetail } from "./ListDetail";

export function MyLists() {
  const dispatch = useDispatch();

  const getListsHandler = () => {
    dispatch(getMyLists(sessionId.session_id));
  };
  
  const sessionId = useSelector((state) => state.getNewToken.sessionId);
  const myLists = useSelector((state) => state.listFetch.myLists);

  const getListDetailHandler = (id) => {
    dispatch(getListDetail(id));
    setDetailToggle(true)
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
          <div
            className="text-white p-3"
            onClick={() => getListDetailHandler(list.id)}
          >
            <p>Name: {list.name}</p>
            <p>Desc: {list.description}</p>
            <p>Items: {list.item_count}</p>
          </div>
        ))}
      </div>
      {detailToggle ? <ListDetail toggleDetail={setDetailToggle}/> : ''}
      <div className="absolute"></div>
    </div>
  );
}