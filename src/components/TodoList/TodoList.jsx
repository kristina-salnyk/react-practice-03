import {
  Button,
  Checkbox,
  Item,
  Text,
  TodoList as TodoListContainer,
} from './TodoList.styled';

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <div>
    <p>Total: {todos.length}</p>
    <p>
      Completed:{' '}
      {todos.reduce((acc, item) => (item.completed ? acc + 1 : acc), 0)}
    </p>
    <TodoListContainer>
      {todos.map(({ id, text, completed }) => (
        <Item key={id}>
          <Checkbox
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />
          <Text>{text}</Text>
          <Button onClick={() => onDeleteTodo(id)}>Delete</Button>
        </Item>
      ))}
    </TodoListContainer>
  </div>
);

export default TodoList;
