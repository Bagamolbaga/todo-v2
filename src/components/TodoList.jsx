import React from "react";
import TodoInput from "./TodoInput.jsx";
import TodolistItem from "./TodoListItem.jsx";

import styled from "styled-components";

const Style_TodoListContainer = styled.div`
  width: 800px;
  height: 500px;
  border: 1px solid blue;
`;

const Style_TodoListTittle = styled.h1`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color: #64c4ed;
  margin: 0 0 20px;
`;

const TypeList = () => {
  return (
    <Style_TodoListContainer>
      <Style_TodoListTittle>Frontend</Style_TodoListTittle>
      <TodolistItem text="text todo" />
      <TodolistItem text="text todo" />
      <TodolistItem text="text todo" />
      <TodolistItem text="text todo" />
      <TodoInput />
    </Style_TodoListContainer>
  );
};

export default TypeList;
