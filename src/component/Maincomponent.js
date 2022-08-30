import React from 'react'
import styled from 'styled-components';
import Options from './Options';
import Questions from './Questions';
import { useState, useEffect } from 'react';
import { api } from '../App'


const Wrapper = styled.div`
  background: #3f4964;
  color:white;
  border-radius: 20px;
  box-shadow: 0px 0px 10px 2px black;
  width: 70%;
  display: flex;
  height: 100%;
`;
const Text = styled.h1`
font-size: 2em;
text-align:center;
`;
function Maincomponent() {

    const [question, setQuestion] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setscore] = useState(0);
    const [showScore, setShowScore] = useState(false);


    // const getQuestions = () => { api.get('/').then(res =>setQuestion(res.data)).catch(err => { console.log("In error:", err) }) }

    useEffect(() => {
        // getQuestions();
        const fetchdata = async () => {
            const res = await api.get('/');
            const data = await res.data;
         
            setQuestion(data);
        }
        fetchdata();
    }, [])

    // console.log(question)

    if(!question) {return (<>Loading...</>)}

    return (
        <Wrapper>
            {showScore ? (
				<Text>
					You scored {score} out of {question.length}
				</Text>
			) : (
                <>
            <Questions question={question} currentQuestion={currentQuestion} />
            <Options question={question} currentQuestion={currentQuestion} setscore={setscore} score={score} setCurrentQuestion={setCurrentQuestion}  showScore={showScore} setShowScore={setShowScore}/>
            </>)}
        </Wrapper>
    )
}

export default Maincomponent