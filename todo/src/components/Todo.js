import React from 'react';

function Todo(props) {
    const { id, item, completed, toggleComplete } = props;

    return (
        <div onClick = {() => toggleComplete(id)} className={`item${completed ? ' completed' : ''}`}>
            <p>{item}</p>
        </div>
    )
};

export default Todo;