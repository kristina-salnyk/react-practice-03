import { Item, Text, TodoList as TodoListContainer } from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo }) => (
  <TodoListContainer>
    <p>Total: {todos.length}</p>
    <p>
      Completed:{' '}
      {todos.reduce((acc, item) => (item.completed ? acc + 1 : acc), 0)}
    </p>
    {todos.map(({ id, text }) => (
      <Item key={id}>
        <Text>{text}</Text>
        <button onClick={() => onDeleteTodo(id)}>Delete</button>
      </Item>
    ))}
  </TodoListContainer>
);

export default TodoList;
