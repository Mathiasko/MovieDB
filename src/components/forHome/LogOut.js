import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteId } from "../../redux/actions/authenticateActions";

const LogOut = ({ sessionObj, deleteId }) => {
  const handleLogOut = () => {
    console.log(sessionObj);
    deleteId(sessionObj);
  };

  return (
    <div>
      <button
        onClick={handleLogOut}
        className="py-2 px-4 text-xl border-green-500 border-solid text-white"
      >
        Sign out
      </button>
    </div>
  );
};

LogOut.propTypes = {
  sessionObj: PropTypes.object,
  deleteId: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const sessionObj = {
    data: { session_id: state.authenticate.sessionId.session_id },
  };
  return { sessionObj };
}

const mapDispatchToProps = {
  deleteId,
};

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(LogOut);
