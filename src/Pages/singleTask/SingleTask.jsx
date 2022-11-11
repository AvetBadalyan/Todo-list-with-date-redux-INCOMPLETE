import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { datesContext } from "./../../Context/context";

export default function SingleTask() {
  const todoList = useContext(datesContext);
  console.log(todoList);
  let { oneDay } = useParams();

  return (
    <div>
      <h1>{oneDay}</h1>
      <div>
        {Object.keys(todoList).map((date) => {
          if (date === oneDay) {
            return todoList[date].map((task) => <div>{task.taskName}</div>);
          }
        })}
      </div>
    </div>
  );
}
