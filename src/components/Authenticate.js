import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewToken, getSessionID } from "../actions/authenticateActions";

export function Authenticate() {
  const dispatch = useDispatch();

  const newToken = useSelector((state) => state.getNewToken.requestToken);

  const handleAuth = () => {
    dispatch(getNewToken());
    setRedirect(true);
  };

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (newToken.success === true && redirect === true) {
      window.open(
        `https://www.themoviedb.org/authenticate/${newToken.request_token}`
      ); // ?redirect_to=http://localhost:3000/
      setRedirect(false)
    }
  }, [newToken.request_token, newToken.success, redirect]);

  const check = () => {
    if (newToken.success === true) {
      return <p>Success</p>;
    } else {
      return <p>No Request token</p>;
    }
  };

  const handleSession = () => {
    const requestToken = { request_token: newToken.request_token };
    dispatch(getSessionID(requestToken));
  };

  return (
    <div>
      <div>
        <p className="text-white text-2xl text-center pt-24">Account</p>
      </div>
      <div>
        <button
          className="text-white text-2xl text-center p-5 bg-gray-600 rounded-xl mt-14"
          onClick={handleAuth}
        >
          Authenticate!
        </button>
        <button
          disabled={!newToken.success}
          className="text-white text-2xl text-center p-5 bg-gray-600 rounded-xl mt-14"
          onClick={handleSession}
        >
          Get Session ID
        </button>
        <div className="text-white">{check()}</div>
      </div>
    </div>
  );
}
