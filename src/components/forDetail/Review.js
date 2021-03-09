import { React } from "react";
import { starRating } from "../../helper/starsRating";
import PropTypes from "prop-types";

export function Review({ name, rating, review, date }) {
  const timeStr = date;
  const parstDate = new Date(timeStr);
  const day = parstDate.getDate();
  const year = parstDate.getFullYear();
  const month = parstDate.getMonth() + 1;
  const dateDis = day + ". " + month + ". " + year;

  return (
    <div className="w-5/12 my-8 mr-10">
      <div className="">
        <p className="text-xl">{name}</p>
        <p className="text-sm">{dateDis}</p>
        <p>{starRating(rating)}</p>
      </div>
      <div className="h-52 py-3 overflow-auto ">
        <p>{review}</p>
      </div>
    </div>
  );
}

Review.propTypes = {
  closeWindow: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  review: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};
