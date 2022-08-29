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

function Maincomponent() {

    const [question, setquestion] = useState([]);

    const getQuestions = () => { api.get('/').then(res => setquestion(res.data)).catch(err => { console.log(err) }) }

    useEffect(() => {
        getQuestions()
    }, [])

    return (
        <Wrapper>
            <Questions question={question}/>
            <Options question={question}/>
        </Wrapper>
    )
}

export default Maincomponent