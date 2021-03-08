import { React, useState } from "react";
import { useSelector } from "react-redux";
import { MovieTab } from "../common/MovieTab";

export function ListDetail({ toggleDetail }) {
  const list = useSelector((state) => state.listFetch.listDetail);

  const [editList, setEditList] = useState(false);



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
}
