import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  getNewToken,
  getSessionId,
} from "../../redux/actions/authenticateActions";
import PropTypes from "prop-types";

const Authenticate = ({ getNewToken, getSessionId, requestTokenObj }) => {
  
  const handleAuth = () => {
    getNewToken();
    setRedirect(true);
  };

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    if (requestTokenObj.success === true && redirect === true) {
      window.open(
        `https://www.themoviedb.org/authenticate/${requestTokenObj.request_token}`
      ); // ?redirect_to=http://localhost:3000/
      setRedirect(false);
    }
  }, [requestTokenObj.request_token, requestTokenObj.success, redirect]);

  const check = () => {
    if (requestTokenObj.success === true) {
      return <p>Success</p>;
    } else {
      return <p>No Request token</p>;
    }
  };

  const handleSession = () => {
    const requestToken = { request_token: requestTokenObj.request_token };
    getSessionId(requestToken);
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
          disabled={!requestTokenObj.success}
          className="text-white text-2xl text-center p-5 bg-gray-600 rounded-xl mt-14"
          onClick={handleSession}
        >
          Get Session ID
        </button>
        <div className="text-white">{check()}</div>
      </div>
    </div>
  );
};

Authenticate.propTypes = {
  getNewToken: PropTypes.func.isRequired,
  getSessionId: PropTypes.func.isRequired,
  requestTokenObj: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  const requestTokenObj = state.authenticate.requestToken;
  return { requestTokenObj };
}

const mapDispatchToProps = {
  getNewToken,
  getSessionId,
};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(Authenticate);
