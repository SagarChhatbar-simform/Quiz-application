import React from 'react'
import styled from 'styled-components';
import Options from './Options';
import Questions from './Questions';
import { useEffect } from 'react';
import { api } from '../App'
import { useSelector,useDispatch } from 'react-redux';
import {questionActions} from '../store/question'

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
font-size: 4em;
text-align: center;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`;
function Maincomponent() {

    // const [question, setQuestion] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchdata = async () => {
            const res = await api.get('/');
            const data = await res.data;
            dispatch(questionActions.quest(data));
        }
        fetchdata();
    }, [dispatch])

    const showScore = useSelector(state => state.showScore.isShowScore);
    const score = useSelector(state => state.score.isScore);
    const question = useSelector( state => state.question.isQuestion.payload);
    console.log(question)

    if (!question) { return (<>Loading...</>) }

    return (
        <Wrapper>
            {showScore ? (
                <Text>
                    You scored {score} out of {question.length}
                </Text>
            ) : (
                <>
                    <Questions />
                    <Options />
                </>)}
        </Wrapper>
    )
}

export default Maincomponent