import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImdb,
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
export function ExternalIds({externalIds}) {
  return (
    <>
      {externalIds ? (
        <div>
          {externalIds.imdb_id ? (
            <a
              href={`https://www.imdb.com/title/${externalIds.imdb_id}`}
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

          {externalIds.facebook_id ? (
            <a
              href={`https://www.facebook.com/${externalIds.facebook_id}`}
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
          {externalIds.instagram_id ? (
            <a
              href={`https://www.instagram.com/${externalIds.instagram_id}`}
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
          {externalIds.twitter_id ? (
            <a
              href={`https://www.twitter.com/${externalIds.twitter_id}`}
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
      ) : (
        ""
      )}
    </>
  );
}
