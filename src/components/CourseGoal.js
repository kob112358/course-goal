import React from "react";
import "./CourseGoal.css";
import { useRef } from "react";

const CourseGoal = (props) => {
  const newGoal = useRef("");
  const addGoalHandler = (e) => {
    e.preventDefault();
    const goalToAdd = {
      name: newGoal.current.value,
      key: newGoal.current.value,
    };
    props.onAddGoal(goalToAdd);
  };
  return (
    <div className="add-goal">
      <h2>Course Goal</h2>
      <form onSubmit={addGoalHandler} className="add-goal__input">
        <input type="text" ref={newGoal}></input>
        <button>Add Goal</button>
      </form>
    </div>
  );
};

export default CourseGoal;
