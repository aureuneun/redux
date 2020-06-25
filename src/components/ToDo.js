import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ text, id, removeToDo }) => {
  return (
    <li>
      <button onClick={removeToDo}>X</button>
      <Link to={`/${id}`}>{text}</Link>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    removeToDo: () => dispatch(actionCreators.removeToDo(ownProps.id)),
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
