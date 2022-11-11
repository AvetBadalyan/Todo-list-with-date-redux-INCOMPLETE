import { useDispatch } from "react-redux"
import { deleteTask } from "../../store/homeSlice"

export default function DailyTask({ item }) {
	const dispatch = useDispatch()

	function removeTask(){
		dispatch(deleteTask({
			taskID: item.id,
			date: item.date,
		}))
	}
	return (
		<div>
			<input type="checkbox"  />
			{item.taskName}
			<button onClick={removeTask}>delete</button>
		</div>
	)
}