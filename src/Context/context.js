import { createContext, useState } from "react";

const initialState = {
  "2019-06-01": [
    {
      id: 1,
      taskName: "go to gym",
      isCompleted: false,
    },
  ],
  "2020-06-01": [
    {
      id: 2,
      taskName: "go to store",
      isCompleted: false,
    },
  ],
  "2022-06-01": [
    {
      id: 3,
      taskName: "go home",
      isCompleted: false,
    },
  ],
};

export const datesContext = createContext();

export default function DateProvider({ children }) {
  const [todoList, setTodoList] = useState(initialState);

  return (
    <datesContext.Provider value={todoList}>{children}</datesContext.Provider>
  );
}
