import React, { useReducer } from 'react';
import {reducer, initialState} from './reducers/reducer'
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList'
import actions from './actions/actions';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state);

  const addTodo = (value) => {
    dispatch(actions.addTodoAction(value))
  }

  const toggleComplete = (value) => {
    dispatch(actions.toggleCompleteAction(value))
  }

  const clearCompleted = () => {
    dispatch(actions.clearCompletedAction())
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo = {addTodo} clearCompleted = {clearCompleted}/>
      <TodoList todos = {state.todos} toggleComplete = {toggleComplete}/>
     
    </div>
  );
}

export default App;
