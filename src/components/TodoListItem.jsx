import React from "react";

import styled from "styled-components";

const Style_TodoListItemContainer = styled.div`
  width: 800px;
  height: 30px;
  border: 1px solid pink;
  display: flex;
  align-items: center;
`;

const TodoListItem = ({text}) => {
  return(
    <Style_TodoListItemContainer>
      {text}
    </Style_TodoListItemContainer>
  )
};

export default TodoListItem;
