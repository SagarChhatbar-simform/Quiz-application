import { createSlice } from "@reduxjs/toolkit";

const initialScoreState = {
    isScore: 0,
}

const scoreSlice = createSlice({
    name: 'Score',
    initialState: initialScoreState,
    reducers: {
        correct(state) {
            state.isScore = state.isScore + 1; 
        },
        incorrect(state) {
            state.isScore = state.isScore - 1; 

        }
    }
});

export const scoreActions = scoreSlice.actions;


export default scoreSlice.reducer;
