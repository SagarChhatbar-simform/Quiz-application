import React from 'react'
import styled from 'styled-components';
import { showScoreActions } from '../store/showScore';
import { useDispatch, useSelector } from 'react-redux';
import { scoreActions } from '../store/score';
import { currentQuestionActions } from '../store/currentQuestion'

const Wrapper = styled.div`
  width: 50%;
  padding: 2em;
  display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
`;
const Button = styled.button`
width: 65%;
padding: 20px 20px 20px 20px;
border-radius: 20px;
background: transparent;
color: white;
border: 4px solid #436484;
font-size: 2em;
text-align: left;
&:hover {
    background-color: #74a1be;
    cursor:pointer;
  }
`;
function Options() {

    const dispatch = useDispatch();
    const currentQuestion = useSelector(state => state.currentQuestion.iscurrentQuestion);
    const question = useSelector(state => state.question.isQuestion.payload);


    const checkAnswer = (isTrue) => {
        if (isTrue) {
            dispatch(scoreActions.correct());
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < question.length) {
            dispatch(currentQuestionActions.next());

        } else {
            dispatch(showScoreActions.show());
        }
    }

    return (
        <>
            <Wrapper >

                {question[currentQuestion].options?.map(answerQuestion =>
                    <Button key={answerQuestion.answerText} onClick={() => checkAnswer(answerQuestion.isTrue)} >{answerQuestion.answerText}</Button>
                )}
            </Wrapper>

        </>

    )
}

export default Options