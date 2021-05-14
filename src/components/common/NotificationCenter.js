import React, { useEffect, useMemo } from "react";
import { errorHandler, successHandler, infoHandler } from "../../helper/Notification";
import PropTypes from "prop-types";
import { connect } from "react-redux";


const NotificationCenter = ({ sessionSuccess, newListData, tokenSuccess }) => {

  // const [success, setSuccess] = useState(false)
  
  useEffect(() => {
    console.log();
    sessionSuccess ? successHandler("Session ID granted") : infoHandler("session Id removed")

  }, [sessionSuccess]);

  if (newListData === true) {
    successHandler("List Created");
  }

  useMemo(() => {
    if (tokenSuccess === false) {
      errorHandler("API key rejected");
    }
  }, [tokenSuccess]);

  return <></>;
};

NotificationCenter.propTypes = {
  sessionSuccess: PropTypes.bool,
  newListData: PropTypes.bool,
  tokenSuccess: PropTypes.bool,
};

function mapStateToProps(state) {
  const sessionSuccess = state.authenticate.sessionId.success;
  const newListData = state.listFetch.myNewList.success;
  const tokenSuccess = state.authenticate.requestToken.success;
  return { sessionSuccess, newListData, tokenSuccess };
}

const mapDispatchToProps = {};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(NotificationCenter);
