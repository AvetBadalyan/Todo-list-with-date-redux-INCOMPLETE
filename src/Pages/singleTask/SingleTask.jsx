import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./SingleTask.css";

export default function SingleTask() {
    const todoList = useSelector((store) => store.SingleTaskSlice);
    let { oneDay } = useParams();

    return (
        <div className="daily-todo-page">
            <div className="daily-todo-list-container">
                <Link to="/">
                    <button>Go back to home</button>
                </Link>
                <h1>{oneDay}</h1>
                <div className="daily-todo-list">
                    {Object.keys(todoList).map((date) => {
                        if (date === oneDay) {
                            return todoList[date].map((task) => (
                                <div>{task.taskName}</div>
                            ));
                        }
                    })}
                </div>
            </div>
        </div>
    );
}
