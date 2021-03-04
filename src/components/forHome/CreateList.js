import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postNewList } from "../../actions/listActions";

export function CreateList() {
  const dispatch = useDispatch();

  const [inputName, setInputName] = useState("");
  const nameChangeHandler = (e) => {
    setInputName(e.target.value);
  };

  const [inputDesc, setInputDesc] = useState("");
  const descChangeHandler = (e) => {
    setInputDesc(e.target.value);
  };

  const sessionId = useSelector((state) => state.getNewToken.sessionId.session_id);


  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { name: inputName, description: inputDesc };

    dispatch(postNewList(payload, sessionId));
  };



  return (
    <div className="">
      <form className="inline-flex flex-col relative" onSubmit={handleSubmit}>
        <label className="text-white">
          Name your list:
          <input
            className="w-44 absolute left-32 outline-none text-black"
            type="text"
            value={inputName}
            onChange={nameChangeHandler}
          />
        </label>
        <label className="text-white mt-5">
          Description:
          <textarea
            className="w-44 absolute left-32 outline-none text-black"
            type="text"
            value={inputDesc}
            onChange={descChangeHandler}
          />
        </label>
        <input type="submit" className="mt-16 ml-32 px-5 py-2" value="Submit" />
      </form>
    </div>
  );
}
