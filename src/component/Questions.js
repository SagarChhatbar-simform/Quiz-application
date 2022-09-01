import React from 'react'
import styled from 'styled-components';
import { useSelector } from 'react-redux';




const Wrapper = styled.div`
  width: 50%;
  padding: 2em;
`;
const Question = styled.h1`
font-size: 3em;
`;
const Text = styled.h1`
font-size: 2em;
`;

function Questions() {

    const currentQuestion = useSelector(state => state.currentQuestion.iscurrentQuestion);
    const question = useSelector(state => state.question.isQuestion.payload);
    return (
        <>
            <Wrapper>
                <Question>Question {currentQuestion + 1}/{question.length}</Question>
                <Text>{question[currentQuestion].Question}</Text>
            </Wrapper>

        </>
    )

}

export default Questions