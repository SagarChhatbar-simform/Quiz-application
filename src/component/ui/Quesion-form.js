import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 4em;
  background: #99d2ff;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 4em;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #3f4964;
`;

const Styles = styled.form`
  border: none;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  width: 50%;
  padding: 0px 50px;
  background: #3f4964;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 2px black;
`;

const Input = styled.input`
  border: 4px solid #436484;
  border-radius: 15px;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`;
const Label = styled.label`
  color: white;
  display: block;
  font-family: sans-serif;
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 6px;
`;
const Button = styled.button`
  border: 4px solid #436484;
  color: white;
  font-family: sans-serif;
  font-size: 14px;
  margin: 20px 0px;
  cursor: pointer;
  background-color: transparent;
  border-radius: 10px;
  height: 35px;
`;

const QuesionForm = () => {
  return (
    <Wrapper>
      <Heading>Question Form</Heading>
      <Styles>
        <Label>Question</Label>
        <Input name="Question" placeholder="question" autoComplete="off" />

        <Label>Option 1</Label>
        <Input name="option1" placeholder="Enter option 1" autoComplete="off" />

        <Label>Option 2</Label>
        <Input name="option2" placeholder="Enter option 2" autoComplete="off" />

        <Label>Option 3</Label>
        <Input name="option3" placeholder="Enter option 3" autoComplete="off" />

        <Label>Option 4</Label>
        <Input name="option4" placeholder="Enter option 4" autoComplete="off" />

        <Label>True Answer</Label>
        <Input name="trueAnswer" placeholder="Enter Right Answer" />

        <Button type="submit">submit</Button>
      </Styles>
    </Wrapper>
  );
};

export default QuesionForm;
