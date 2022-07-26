import React from "react";
import "./Goal.css";

const Goal = (props) => {
  const goalClick = () => {
    props.toDeleteHandler(props.goal.name);
  };
  return (
    <button className="goalButton" onClick={goalClick}>
      {props.children}
    </button>
  );
};

export default Goal;
