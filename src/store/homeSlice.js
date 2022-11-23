import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  "2019-06-02": [
    {
      id: 1,
      taskName: "go to gym",
      isCompleted: false,
      isInEditMode: false,
    },
    {
      id: 11,
      taskName: "go to right",
      isCompleted: false,
      isInEditMode: false,
    },
    {
      id: 111,
      taskName: "go to left",
      isCompleted: false,
      isInEditMode: false,
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
      state[payload.date] = state[payload.date].filter(
        (task) => task.id !== payload.id
      );
    },

    toggleState(state, { payload }) {
      state[payload.date] = state[payload.date].map((task) => {
        if (task.id === payload.id) {
          task.isCompleted = payload.isCompleted;
        }
        return task;
      });
    },
    editTask(state, { payload }) {
      state[payload.date] = state[payload.date].map((task) => {
        if (task.id === payload.id) {
          task.isInEditMode = payload.isInEditMode;
        }
        return task;
      });
    },
    saveTask(state, { payload }) {
      state[payload.date] = state[payload.date].map((task) => {
        if (task.id === payload.id) {
          task.taskName = payload.taskName;
          task.isInEditMode = payload.isInEditMode;
        }
        return task;
      });
    },
    clearCompletedHandler(state, { payload }) {
      state[payload.date] = state[payload.date].filter(
        (task) => !task.isCompleted
      );
    },
    deleteAllHandler(state, { payload }) {
      state[payload.date].length = 0;
    },
    deleteDate(state, { payload }) {
      delete  state[payload.date];
    },
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
  saveTask,
  clearCompletedHandler,
  deleteAllHandler,
  deleteDate,
} = homeSlice.actions;
export default homeSlice.reducer;
