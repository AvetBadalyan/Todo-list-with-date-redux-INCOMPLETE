import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: {
        "2019-06-01": [
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
        "2020-06-01": [
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
    },
};
export const homeSlice = createSlice({
    name: "homeSlice",
    initialState,
    reducers: {
        initData(state, { payload }) {
            if (payload) state.value = payload;
        },
        addNewDate(state, { payload }) {
			console.log('Log payload ::: ', payload)
            const { date, content } = payload;
            state.value = { ...state.value, [date]: [{content}] };
        },
        removeDate(state, { payload }) {
            const { date } = payload;
        },

        // ===========================================

        addTask(state, { payload }) {
            state.value = [
                ...state.value,
                {
                    id: Math.random(),
                    taskName: payload.taskName,
                    isCompleted: false,
                },
            ];
        },
        toggleState(state, { payload }) {
            state.value = state.value.map((task) => {
                if (task.id === payload.taskID) {
                    return {
                        ...task,
                        isCompleted: !task.isCompleted,
                    };
                }
                return task;
            });
        },
        editTask(state, { payload }) {
            state.value = state.value.map((task) => {
                if (task.id === payload.taskID) {
                    return {
                        ...task,
                        taskName: payload.taskName,
                    };
                }
                return task;
            });
        },
    },
});

export const {
    initData,
    addNewDate,
    removeDate,

    editTask,
    addTask,
    toggleState,
} = homeSlice.actions;
export default homeSlice.reducer;
