import { createSlice } from "@reduxjs/toolkit";

const initialQuestionState = {
    iscurrentQuestion: 0,
}

const currentQuestionSlice = createSlice({
    name: 'currentQuestion',
    initialState: initialQuestionState,
    reducers: {
        next(state) {
            state.iscurrentQuestion = state.iscurrentQuestion + 1; 
        },
        previous(state) {
            state.iscurrentQuestion = state.iscurrentQuestion - 1; 

        }
    }
});

export const currentQuestionActions = currentQuestionSlice.actions;


export default currentQuestionSlice.reducer;