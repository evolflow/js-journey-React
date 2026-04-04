function WorkoutList({ workouts, setWorouts }) {
  return (
    <div>
      {workouts.map((workout, index) => (
        <p key={index}>{workout}</p>
      ))}
    </div>
  );
}

export default WorkoutsList;
