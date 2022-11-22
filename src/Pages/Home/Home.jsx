import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Form from "../../Components/Form/Form";
import "./Home.css";

export default function Home() {
  const todoList = useSelector((store) => store.homeSlice);

  return (
    <div className="home-page">
      <div className="todo-input-container">
        <h1>To do list</h1>
        <div className="new-task-container">
          <h1>New task</h1>
          <Form />
        </div>

        <div className="dates-container">
          Dates
          <div className="dates">
            {Object.keys(todoList).map((date) => (
              <Link key={Math.random()} to={date}>
                <div className="single-date-in-home">
                  <div>{date}</div>
                  <div>{todoList[date].length} tasks</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
