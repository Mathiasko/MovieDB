import { React, useEffect, useState } from "react";
import { connect } from "react-redux";
import { mainFetch } from "../../redux/actions/mainActions";
import Search from "../forHome/Search";
import { TopRated } from "../forHome/TopRated";
import { useMeasure, useWindowScroll, useWindowSize } from "react-use";
import Authenticate from "../forHome/Authenticate";
import CreateList from "../forHome/CreateList";
import MyLists from "../forHome/MyLists";
import PropTypes from "prop-types";

const Home = ({ mainFetch, moviePage, setMoviePage }) => {
  useEffect(() => {
    mainFetch(moviePage);
  }, [moviePage, mainFetch]);

  const { y: pageYOffest } = useWindowScroll();
  const [ref, { height }] = useMeasure();
  const { height: windHeight } = useWindowSize();

  let scrollHeight = height - windHeight + 96;

  const [toggleCreateList, setToggleCreateList] = useState(true);
  return (
    <div ref={ref}>
      <div
        className="fixed top-1 left-0 h-3 bg-red-400 z-10"
        style={{ right: `${100 - (pageYOffest / scrollHeight) * 100}%` }}
      />

      <div className="flex">
        <TopRated moviePage={moviePage} setMoviePage={setMoviePage} />
        <Search vec={"vec"} />
        <div className="flex-1">
          <Authenticate />
          <div>
            <p
              className="inline-block cursor-pointer text-white p-3 mt-10 bg-gray-600 rounded-xl"
              onClick={() => setToggleCreateList(!toggleCreateList)}
            >
              {toggleCreateList ? "Create List" : "Hide"}
            </p>
            {toggleCreateList ? "" : <CreateList />}
          </div>
          <div className="mt-10">
            <MyLists />
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {
  mainFetch: PropTypes.func.isRequired,
  moviePage: PropTypes.number.isRequired,
  setMoviePage: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  mainFetch,
};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(Home);
