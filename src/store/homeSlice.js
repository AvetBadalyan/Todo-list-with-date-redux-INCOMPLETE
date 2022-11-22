import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  "2019-06-02": [
    {
      id: 1,
      taskName: "go to gym",
      isCompleted: false,
    },
    {
      id: 11,
      taskName: "go to right",
      isCompleted: false,
    },
    {
      id: 111,
      taskName: "go to left",
      isCompleted: false,
    },
  ],
  "2020-06-03": [
    {
      id: 2,
      taskName: "go to store",
      isCompleted: false,
    },
    {
      id: 11,
      taskName: "go to right",
      isCompleted: false,
    },
    {
      id: 111,
      taskName: "go to left",
      isCompleted: false,
    },
  ],
  "2022-06-01": [
    {
      id: 3,
      taskName: "go home",
      isCompleted: false,
    },
    {
      id: 11,
      taskName: "go to right",
      isCompleted: false,
    },
    {
      id: 111,
      taskName: "go to left",
      isCompleted: false,
    },
  ],
};
export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    addNewDate(state, { payload }) {
      const { date, content } = payload;

      console.log("state ::: ", state);
      if (date && content.taskName) {
        if (!state[date]) {
          state[date] = [];
        }
        state[date].push(content);
      }
    },

    // ===========================================
    deleteTask(state, { payload }) {
      state[payload.date] = state[payload.date].filter(
        (task) => task.id !== payload.id
      );
    },

    // yes asi es filtri logikayov anenq porci de nayi

    toggleState(state, { payload }) {
      state[payload.date] = state[payload.date].map((task) => {
        if (task.id === payload.id) {
          task.isCompleted = payload.isCompleted;
        }
        return task;
      });
    },
    editTask(state, { payload }) {},
  },
});

export const {
  initData,
  addNewDate,
  removeDate,
  deleteTask,
  editTask,
  addTask,
  toggleState,
} = homeSlice.actions;
export default homeSlice.reducer;
