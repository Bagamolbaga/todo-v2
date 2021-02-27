import TypeTodo from './components/TypeTodo.jsx'
import TodoList from './components/TodoList.jsx'
import styled from 'styled-components';

const Style_Container = styled.div`
  width: 1140px;
  min-height: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  border: 1px solid red;
`;

function App() {
  return (
    <Style_Container>
      <TypeTodo />
      <TodoList />
    </Style_Container>
  );
}

export default App;