import { useDispatch, useSelector } from "react-redux";
import { deleteTask, toggleState } from "../../store/homeSlice";
import "./DailyTask.css";

export default function DailyTask({ item, oneDay }) {
  const dispatch = useDispatch();
  const isCompleted = item.isCompleted;
  console.log(isCompleted, "isCompleted");

  function removeTask() {
    dispatch(
      deleteTask({
        id: item.id,
        date: oneDay,
      })
    );
  }
  function checkHandler(e) {
    dispatch(
      toggleState({
        id: item.id,
        isCompleted: e.target.checked,
        date: oneDay,
      })
    );
  }

  return (
    <div className={isCompleted ? "single-task completed" : "single-task"}>
      <input type="checkbox" checked={isCompleted} onChange={checkHandler} />
      <p>{item.taskName}</p>
      <button onClick={removeTask}>delete</button>
    </div>
  );
}
