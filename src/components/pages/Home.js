import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { mainFetch } from "../../actions/mainActions";
import { Search } from "../Search";
import { TopRated } from "../TopRated";
import { useMeasure, useWindowScroll, useWindowSize } from "react-use";
import { Authenticate } from "../Authenticate";
import { CreateList } from "../CreateList";
import { MyLists } from "../MyLists";

export function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(mainFetch());
  });

  const { y: pageYOffest } = useWindowScroll();
  const [ref, { height }] = useMeasure();
  const { height: windHeight } = useWindowSize();

  let scrollHeight = height - windHeight + 96;

  const [toggleCreateList, setToggleCreateList] = useState(true);

  return (
    <div ref={ref}>
      <div
        className="fixed top-1 left-0 h-3 bg-red-400"
        style={{ right: `${100 - (pageYOffest / scrollHeight) * 100}%` }}
      />

      <div className="flex">
        <TopRated />
        <Search />
        <div>
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
