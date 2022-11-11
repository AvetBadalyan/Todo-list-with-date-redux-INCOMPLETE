import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../Components/Form/Form";
import { datesContext } from "../../Context/context";
import "./Home.css";

export default function Home() {
  const todoList = useContext(datesContext);
  console.log(todoList, "todo list");
    const dates = Object.keys(todoList);
    console.log(dates);

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
