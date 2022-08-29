import React from 'react'
import styled from 'styled-components';
import Maincomponent from './Maincomponent';

const Wrapper = styled.div`
padding: 4em;
background: #99d2ff;
height: 700px;
display: flex;
flex-direction: column;
align-items: center;

`;

const Text = styled.h1`
font-size: 4em;
color:#3f4964;
`;

function Quiz() {
    return (
        <Wrapper>
            <Text>React Quiz App</Text>
            <Maincomponent />
        </Wrapper>
    )
}

export default Quiz