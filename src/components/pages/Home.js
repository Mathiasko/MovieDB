import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { mainFetch } from "../../redux/actions/mainActions";
import { Search } from "../forHome/Search";
import { TopRated } from "../forHome/TopRated";
import { useMeasure, useWindowScroll, useWindowSize } from "react-use";
import { Authenticate } from "../forHome/Authenticate";
import { CreateList } from "../forHome/CreateList";
import { MyLists } from "../forHome/MyLists";

export function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mainFetch(moviePage));
  });

  const { y: pageYOffest } = useWindowScroll();
  const [ref, { height }] = useMeasure();
  const { height: windHeight } = useWindowSize();

  let scrollHeight = height - windHeight + 96;

  const [toggleCreateList, setToggleCreateList] = useState(true);
  const [moviePage, setMoviePage] = useState(1)
  return (
    <div ref={ref}>
      <div
        className="fixed top-1 left-0 h-3 bg-red-400 z-10"
        style={{ right: `${100 - (pageYOffest / scrollHeight) * 100}%` }}
      />

      <div className="flex">
        <TopRated moviePage={moviePage} setMoviePage={setMoviePage}/>
        <Search />
        <div className='flex-1'>
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
            <MyLists/>
          </div>
        </div>
      </div>
    </div>
  );
}
