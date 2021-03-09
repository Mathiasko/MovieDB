import { React, useState } from "react";
import { connect, useSelector } from "react-redux";
import { postNewList } from "../../redux/actions/listActions";

export const CreateList = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setList((prevList) => ({
      ...prevList,
      [name]: value,
    }));
  };

  const [list, setList] = useState({
    name: "",
    description: "",
    language: "en",
  });

  const sessionId = useSelector(
    (state) => state.getNewToken.sessionId.session_id
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewList(list, sessionId);
  };

  console.log(list);

  return (
    <div className="">
      <form className="inline-flex flex-col relative" onSubmit={handleSubmit}>
        <label className="text-white">
          Name your list:
          <input
            name="name"
            className="w-44 absolute left-32 outline-none text-black"
            type="text"
            value={list.name}
            onChange={handleChange}
          />
        </label>
        <label className="text-white mt-5">
          Description:
          <textarea
            name="description"
            className="w-44 absolute left-32 outline-none text-black"
            type="text"
            value={list.description}
            onChange={handleChange}
          />
        </label>
        <input type="submit" className="mt-16 ml-32 px-5 py-2" value="Submit" />
      </form>
    </div>
  );
};



function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  postNewList,
};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(CreateList);