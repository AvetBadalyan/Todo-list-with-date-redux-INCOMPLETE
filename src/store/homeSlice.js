import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    value: {
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
            const { date, content } = payload;

            if (date && content.taskName) {
				if (!(state.value[date])) {
					state.value[date] = []
				}
                state.value[date].push(content);
            }
        },
        removeDate(state, { payload }) {
            const { date } = payload;
        },

        // ===========================================
		deleteTask(state, {payload}) {
			console.log('Log payload ::: ', payload)
			console.log('Log state.value[payload.date] ::: ', state.value)
			state[payload.date].filter(task => task.id !== payload.taskID)
		},
        toggleState(state, { payload }) {
            
        },
        editTask(state, { payload }) {
            
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
} = homeSlice.actions;
export default homeSlice.reducer;
