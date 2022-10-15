import Counter from 'components/Counter';
import { Dropdown } from 'components/Dropdown';
import { Box } from './Box';
import { ColorPicker } from 'components/ColorPicker';
import TodoList from 'components/TodoList';
import { Component } from 'react';
import Form from './Form';
import shortid from 'shortid';

const colorPickerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
  { label: 'pink', color: '#E91E63' },
  { label: 'indigo', color: '#3F51B5' },
];

export class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: true },
      { id: 'id-2', text: 'Разобраться с React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false },
    ],
  };

  addTodo = text => {
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };

    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(item => item.id !== id),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  onToggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  render() {
    const { todos } = this.state;
    return (
      <Box display="grid" gridTemplateColumns="1fr 1fr" p="30px" gridGap="80px">
        <Counter initialValue={10}></Counter>
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.onToggleCompleted}
        />
        <Form onSubmit={this.formSubmitHandler}></Form>
      </Box>
    );
  }
}
