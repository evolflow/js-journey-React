import { useState } from "react";
import WorkoutForm from "./components/WorkoutForm.jsx";
import WorkoutList from "./components/WorkoutList.jsx";

function App() {
  const [workouts, setWorkouts] = useState([]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Workout Tracker 💪</h1>

      <WorkoutForm workouts={workouts} setWorkouts={setWorkouts} />
      <WorkoutList workouts={workouts} setWorkouts={setWorkouts} />
    </div>
  );
}

export default App;
