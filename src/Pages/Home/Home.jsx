import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../Components/Form/Form";
import "./Home.css";

export default function Home() {
  const mockData = ["2019-06-01", "2020-06-01", "2022-06-01"];
  const mockTodo = {
    "2019-06-01": [
      {
        id: 1,
        task: "go to gym",
        isCompleted: false,
      },
    ],
  };

  const [dates, setDates] = useState(mockData);
  const [todoList, setTodoList] = useState(mockTodo);

  return (
    <div className="home-page">
      <div className="todo-input-container">
        <h1>To do list</h1>
        <div className="new-task-container">
          <h1>New task</h1>
          <Form />
        </div>

        <div className="dates-container">
          {dates.map((date) => (
            <Link key={Math.random()} to={date}>
              <div>{date}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
