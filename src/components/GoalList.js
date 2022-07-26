import React from "react";
import "./GoalList.css";
import Goal from "./Goal";

const GoalList = (props) => {
  return (
    <div>
      {props.goalList.map((goal) => (
        <Goal
          key={goal.key}
          goal={goal}
          toDeleteHandler={props.toDeleteHandler}
        >
          {goal.name}
        </Goal>
      ))}
    </div>
  );
};

export default GoalList;
