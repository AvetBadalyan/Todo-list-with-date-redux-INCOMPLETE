import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="input-and-button-container">
      <form>
        <input type="text" placeholder="Type here" />
        <input type="date" value="2022-11-11" />
        <button> Add </button>
      </form>
    </div>
  );
}
