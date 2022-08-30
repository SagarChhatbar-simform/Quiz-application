import React from 'react'
import styled from 'styled-components';



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

function Questions(props) {

    

    return (
        <>


            <Wrapper>
            <Question>Question {props.currentQuestion+1}/{props.question.length}</Question>
                <Text>{props.question[props.currentQuestion].Question}</Text>
            </Wrapper>

        </>
    )

}

export default Questions