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

const Style_TodoInputAddContainer = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  opacity: 0;
  transition: all 0.5s ease-out;
  ${Input}:focus + & {
    opacity: 1;
    transition: all 0.1s ease-out;
  }
`;

const Style_TodoInputAddButton = styled.button`
  width: 135px;
  height: 34px;
  text-align: center;
  background: #4dd599;
  border-radius: 4px;
  outline: none;
  border: none;
  color: #fff;
  margin-right: 20px;
  cursor: pointer;
  &:active {
    background: #2aac73;
  }
`;

const Style_TodoInputCloseButton = styled(Style_TodoInputAddButton)`
  background: #F4F6F8;
  color: #9C9C9C;
  &:active {
    background: #7b7a7a;
  }
`;

const Style_TodoInputI = styled.i`
  color: #9C9C9C;
  s
`;

const TodoInput = () => {
  return (
    <Style_TodoInputContainer>
        <Style_TodoInputI>
            <i class="fas fa-plus"></i>
        </Style_TodoInputI>
        
      <Input placeholder="New todo"></Input>
      <Style_TodoInputAddContainer>
        <Style_TodoInputAddButton>ADD</Style_TodoInputAddButton>
        <Style_TodoInputCloseButton>CLOSE</Style_TodoInputCloseButton>
      </Style_TodoInputAddContainer>
    </Style_TodoInputContainer>
  );
};

export default TodoInput;
