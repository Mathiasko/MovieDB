import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarE } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

export const starRating = (rating) => {
  const stars = [];

  if (rating) {
    for (let i = 1; i <= 5; i++) {
      if (i <= rating / 2) {
        stars.push(<FontAwesomeIcon icon={faStar} />);
      } else {
        if (rating / 2 - i >= -0.5) {
          stars.push(<FontAwesomeIcon icon={faStarHalfAlt} />);
        } else {
          stars.push(<FontAwesomeIcon icon={faStarE} />);
        }
      }
    }
    return stars;
  } else {
    return null;
  }
};
