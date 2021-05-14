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
import LogOut from "../forHome/LogOut";
import Spinner from "../common/spinner";

const Home = ({ mainFetch, moviePage, setMoviePage, loading }) => {
  useEffect(() => {
    mainFetch(moviePage);
  }, [moviePage, mainFetch]);

  const { y: pageYOffest } = useWindowScroll();
  const [ref, { height }] = useMeasure();
  const { height: windHeight } = useWindowSize();

  let scrollHeight = height - windHeight + 96;

  const [toggleCreateList, setToggleCreateList] = useState(true);
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div ref={ref}>
          <div className="absolute top-5 right-5">
            <LogOut />
          </div>

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
      )}
    </>
  );
};

Home.propTypes = {
  mainFetch: PropTypes.func.isRequired,
  moviePage: PropTypes.number.isRequired,
  setMoviePage: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const loading = state.apiCallsInProgress > 0;
  return { loading };
}

const mapDispatchToProps = {
  mainFetch,
};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(Home);
