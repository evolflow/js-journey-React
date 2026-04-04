import { useState } from "react";

function WorkoutForm({ workouts, setWorkouts }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim() === "") return;

    setWorkouts([...workouts, text]);
    setText("");
  };

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button on Click={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default WorkoutForm;
