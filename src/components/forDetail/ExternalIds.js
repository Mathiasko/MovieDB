import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import {
  faImdb,
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export const ExternalIds = ({
  imdb_id,
  facebook_id,
  instagram_id,
  twitter_id,
}) => {
  return (
    <>
      <div>
        {imdb_id ? (
          <a
            href={`https://www.imdb.com/title/${imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faImdb}
              size="3x"
              style={{ color: "#F5C518" }}
              className="mr-2"
            />
          </a>
        ) : (
          <FontAwesomeIcon
            icon={faImdb}
            size="3x"
            style={{ color: "#414141" }}
            className="mr-2"
          />
        )}

        {facebook_id ? (
          <a
            href={`https://www.facebook.com/${facebook_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faFacebookSquare}
              size="3x"
              style={{ color: "#2752aa" }}
              className="mr-2"
            />
          </a>
        ) : (
          <FontAwesomeIcon
            icon={faFacebookSquare}
            size="3x"
            style={{ color: "#414141" }}
            className="mr-2"
          />
        )}
        {instagram_id ? (
          <a
            href={`https://www.instagram.com/${instagram_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagramSquare}
              size="3x"
              style={{ color: "#aa293f" }}
              className="mr-2"
            />
          </a>
        ) : (
          <FontAwesomeIcon
            icon={faInstagramSquare}
            size="3x"
            style={{ color: "#414141" }}
            className="mr-2"
          />
        )}
        {twitter_id ? (
          <a
            href={`https://www.twitter.com/${twitter_id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faTwitterSquare}
              size="3x"
              style={{ color: "rgb(29, 161, 242)" }}
              className="mr-2"
            />
          </a>
        ) : (
          <FontAwesomeIcon
            icon={faTwitterSquare}
            size="3x"
            style={{ color: "#414141" }}
            className="mr-2"
          />
        )}
      </div>
    </>
  );
};
ExternalIds.propTypes = {
  imdb_id: PropTypes.string,
  facebook_id: PropTypes.string,
  instagram_id: PropTypes.string,
  twitter_id: PropTypes.string,
};
