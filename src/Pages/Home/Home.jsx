import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Form from "../../Components/Form/Form";
import { deleteDate } from "../../store/homeSlice";
import "./Home.css";

export default function Home() {
  const todoList = useSelector((store) => store.homeSlice);

  const dispatch = useDispatch();

  function deleteDateHandler(date) {
    dispatch(
      deleteDate({
        date: date,
      })
    );
  }

  return (
    <div className="home-page">
      <div className="todo-input-container">
        <h1>Avet's To do list app</h1>
        <div className="new-task-container">
          <h1>New task</h1>
          <Form />
        </div>

        <div className="dates-container">
          <h2>Dates</h2>
          <div className="dates">
            {Object.keys(todoList)
              .sort((a, b) => {
                const dateA = new Date(a);
                const dateB = new Date(b);

                return dateA - dateB;
              })
              .map((date) => (
                <div key={date} className="single-date">
                  <Link to={date}>
                    <div className="single-date-text">
                      <div>{date}</div>
                      <div>Total: {todoList[date].length}</div>
                    </div>
                  </Link>
                  <button onClick={() => deleteDateHandler(date)}>
                    Delete
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
