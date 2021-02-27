import { React } from "react";
import { TopRatedMovie } from "./TopRatedMovie";


export function TopRated() {
  return (
    <div className='mr-10'>
      <h2 className="text-3xl text-green-600 text-center pt-12 font-medium">
      Top Rated
      </h2>
      <div className='flex'>
        <TopRatedMovie/>


      </div>
    </div>
  );
}
