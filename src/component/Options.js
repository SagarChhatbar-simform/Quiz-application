import React from 'react'
import styled from 'styled-components';


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
function Options(props) {

    const checkAnswer = (isTrue) => {
        if (isTrue) {
            props.setscore(props.score + 1);
        }

        const nextQuestion = props.currentQuestion + 1;
        if (nextQuestion < props.question.length) {
            props.setCurrentQuestion(nextQuestion);
        } else {
            props.setShowScore(true);
        }

    }
    return (
        <>
            <Wrapper >

                {props.question[props.currentQuestion].options?.map(answerQuestion =>
                    <Button key={answerQuestion.answerText} onClick={() => checkAnswer(answerQuestion.isTrue)} >{answerQuestion.answerText}</Button>
                )}
            </Wrapper>

        </>

    )
}

export default Options