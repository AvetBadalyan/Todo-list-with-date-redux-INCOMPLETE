import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addNewDate } from "../../store/homeSlice";
import "./Form.css";

export default function Form() {
	const dateRef = useRef()
	const nameRef = useRef()
	const dispatch = useDispatch()

    function submitHandler(e) {
        e.preventDefault();
		dispatch(addNewDate({
			date: dateRef.current.value,
			content: {
				id: Math.random(),
				taskName: nameRef.current.value,
				isCompleted: false,
			}
		}))
		nameRef.current.value = ""
    };

    return (
        <div className="input-and-button-container">
            <form className="form" onSubmit={submitHandler}>
                <input
                    type="text"
                    placeholder="Type here"
					ref={nameRef}
                />
                <input
                    type="date"
                    defaultValue={new Date()}
					ref={dateRef}
                />
                <button onClick={submitHandler}> Add </button>
            </form>
        </div>
    );
}
