import { useWorkoutsContext } from "../../hooks/useWorkoutsContext";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext();

  const handleClick = async () => {
    const response = await fetch(
      "https://confused-deer-zipper.cyclic.app/api/workouts" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load(in Kg) : </strong>
        {workout.load}
      </p>
      <p>
        <strong>Reps : </strong>
        {workout.reps}
      </p>
      <span className="delete-btn" onClick={handleClick}>
        <i class="fa-solid fa-trash"></i>
      </span>
      <p>
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
    </div>
  );
};

export default WorkoutDetails;
