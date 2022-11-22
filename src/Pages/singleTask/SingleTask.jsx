import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import CurrentDayForm from "../../Components/currentDayForm/CurrentDayForm";
import DailyTask from "../../Components/DailyTask/DailyTask";
import "./SingleTask.css";

export default function SingleTask() {
  let { oneDay } = useParams();
  const dailyList = useSelector((store) => store.homeSlice[oneDay]);

  return (
    <div className="daily-todo-page">
      <div className="daily-todo-list-container">
        <Link to="/">
          <button>Go back to home</button>
        </Link>
        <h1>{oneDay}</h1>

        <CurrentDayForm oneDay={oneDay} />

        <div className="daily-todo-list">
          {dailyList[0] &&
            dailyList.map((item) => (
              <DailyTask key={item.id} item={item} oneDay={oneDay} />
            ))}
        </div>
      </div>
    </div>
  );
}
