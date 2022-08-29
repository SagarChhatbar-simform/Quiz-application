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
            {props.question?.map(question =>
                <Wrapper key={question.id}>
                    <Question>Question {question.id}/{props.question.length}</Question>
                    <Text key={question.id}>{question.Question}</Text>
                </Wrapper>

            )}
        </>
    )

}

export default Questions