import { configureStore } from '@reduxjs/toolkit'
import showScoreReducer from './showScore';
import scoreReducer from './score';
import currentQuestion from './currentQuestion';
import question from './question'


const store = configureStore({
    reducer: { showScore: showScoreReducer, score: scoreReducer, currentQuestion: currentQuestion,question:question }
});



export default store; 