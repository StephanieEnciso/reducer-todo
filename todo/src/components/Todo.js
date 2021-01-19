import React from 'react';

function Todo(props) {
    const { id, item, completed, toggleComplete } = props;

    return (
        <div onClick = {() => toggleComplete(id)} className={`task${completed ? ' completed' : ''}`}>
            <p>{item}</p>
        </div>
    )
};

export default Todo;