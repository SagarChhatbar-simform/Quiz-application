import { createSlice } from "@reduxjs/toolkit";

const initialQuestionState = {
    isQuestion: [],
}

const questionSlice = createSlice({
    name: 'question',
    initialState: initialQuestionState,
    reducers: {
        quest(state,data) {
            state.isQuestion = data;
        }
    }
});

export const questionActions = questionSlice.actions;


export default questionSlice.reducer;
