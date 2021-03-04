import { React } from "react";
import { useSelector } from "react-redux";
import { MovieTab } from "../common/MovieTab";

export function ListDetail({toggleDetail}) {
  const list = useSelector(
    (state) => state.listFetch.listDetail
  );

  return (
    <div className="relative text-white bg-opacity-40 bg-indigo-600 p-5">
      <p className='absolute p-4 right-1 top-0 cursor-pointer' onClick={()=>toggleDetail(false)}>╳</p>
      {list? ( <div><p>{list.name}</p>
      <p>{list.description}</p>
      <div>
        {list.items ?
        list.items.map((movie)=>(
          <MovieTab  title={movie.title} genreid={movie.genre_ids} rating={movie.vote_average} lang={movie.original_language} movieID={movie.id} poster={movie.poster_path} key={movie.id}/>
        )):''
        }
      </div></div> ):'loading'}
      
    </div>
  );
}
