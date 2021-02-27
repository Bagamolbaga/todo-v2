import React from "react";

import styled from "styled-components";

const Style_TypeTodoContainer = styled.div`
  width: 250px;
  height: 500px;
  border: 1px solid green;
`;

const TypeTodo = () => {
  return(
    <Style_TypeTodoContainer>
      Type todo
    </Style_TypeTodoContainer>
  )
};

export default TypeTodo;
