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
      if (date && content.taskName) {
        if (!state[date]) {
          state[date] = [];
        }
        state[date].push(content);
      }
    },

    // ===========================================
    deleteTask(state, { payload }) {
      let index = state[payload.date].findIndex(
        (task) => task.id === payload.id
      );
      state[payload.date].splice(index, 1);
    },

    toggleState(state, { payload }) {},
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
