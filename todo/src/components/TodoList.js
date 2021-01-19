import React from 'react';
import Todo from './Todo';

function TodoList(props) {
    const {todos, toggleComplete} = props;

    return (
        <div>
        {todos.map(todo => (
            <Todo key = {todo.id} {...todo} toggleComplete = {toggleComplete}/>
        ))}
    </div>
    )
}

export default TodoList;