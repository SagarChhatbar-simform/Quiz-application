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

    const checkAnswer = (e) => {
        var ans = e.target.value;
        props.question?.map(((question) => {
            console.log(question.correct, ans)
            if (question.correct === ans) {
                console.log("correct")
            }
            else {
                console.log("incorrect")
            }
        }))
    }

    return (
        <>
            {props.question?.map(question =>
                <Wrapper key={question.id}>
                    {console.log(question)}
                    <Button onClick={checkAnswer} value={question.options1}>{question.options1}</Button>
                    <Button onClick={checkAnswer} value={question.options2}>{question.options2}</Button>
                    <Button onClick={checkAnswer} value={question.options3}>{question.options3}</Button>
                    <Button onClick={checkAnswer} value={question.options4}>{question.options4}</Button>
                </Wrapper>
            )}
        </>

    )
}

export default Options