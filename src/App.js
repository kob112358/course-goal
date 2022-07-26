import "./App.css";
import CourseGoal from "./components/CourseGoal";
import GoalList from "./components/GoalList";
import { useState } from "react";

function App() {
  const [goalList, setGoalList] = useState([
    {
      name: "Do all exercises!",
      key: "Do all exercises!",
    },
    {
      name: "Finish course",
      key: "Finish course",
    },
    {
      name: "Meditate",
      key: "Meditate",
    },
  ]);

  const addGoal = (goal) => {
    setGoalList((prevState) => {
      return [goal, ...prevState];
    });
  };

  const deleteGoal = (goalId) => {
    setGoalList((prevState) => {
      const updatedGoals = prevState.filter((goal) => goalId !== goal.key);
      return updatedGoals;
    });
  };

  return (
    <div className="goal-display">
      <CourseGoal onAddGoal={addGoal} />
      <GoalList goalList={goalList} toDeleteHandler={deleteGoal} />
    </div>
  );
}

export default App;
