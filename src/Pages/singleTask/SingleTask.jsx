import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import DailyTask from "../../Components/DailyTask/DailyTask";
import "./SingleTask.css";

export default function SingleTask() {
    let { oneDay } = useParams();
    const dailyList = useSelector((store) => store.homeSlice.value[oneDay]);
    console.log("Log dailyList ::: ", dailyList);

    return (
        <div className="daily-todo-page">
            <div className="daily-todo-list-container">
                <Link to="/">
                    <button>Go back to home</button>
                </Link>
                <h1>{oneDay}</h1>
                <div className="daily-todo-list">
                    {dailyList[0] &&
                        dailyList.map((item) => {
                            item = { ...item, date: oneDay };
                            return <DailyTask key={item.id} item={item} />;
                        })}
                </div>
            </div>
        </div>
    );
}
