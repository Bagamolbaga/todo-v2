import React from "react";

import styled from "styled-components";

const Input = styled.input``;

const Style_TodoInputContainer = styled.div`
  width: 800px;
  height: 40px;
  border: 1px solid pink;
  ${Input} {
    height: 30px;
    border: none;
    width: 500px;
    padding: 0 10px;
    font-family: Lato;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 17px;
    color: #c7c7c7;
    outline: none;
    border: 2px solid #fff;
    border-radius: 4px;
  }
  ${Input}:focus {
    color: black;
    border: 2px solid #64c4ed;
  }
`;

const TodoInput = () => {
  return (
    <Style_TodoInputContainer>
      <Input placeholder="New todo"></Input>
    </Style_TodoInputContainer>
  );
};

export default TodoInput;
