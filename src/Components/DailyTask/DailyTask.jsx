import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/homeSlice";
import "./DailyTask.css";

export default function DailyTask({ item, oneDay }) {
  const dispatch = useDispatch();

  function removeTask() {
    dispatch(
      deleteTask({
        id: item.id,
        date: oneDay,
      })
    );
  }
  return (
    <div className="single-task">
      <input type="checkbox" />
      <p>{item.taskName}</p>
      <button onClick={removeTask}>delete</button>
    </div>
  );
}
