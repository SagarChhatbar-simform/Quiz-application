import { createSlice } from "@reduxjs/toolkit";

const initialShowScoreState = {
    isShowScore: false,
}

const showScoreSlice = createSlice({
    name: 'showScore',
    initialState: initialShowScoreState,
    reducers: {
        show(state) {
            state.isShowScore = true;
        },
        dontshow(state) {
            state.isShowScore = false;
        }
    }
});

export const showScoreActions = showScoreSlice.actions;


export default showScoreSlice.reducer;
