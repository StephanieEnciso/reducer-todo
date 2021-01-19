import { useState } from "react";
import React from 'react';

function TodoForm(props) {
    const [formValue, setFormValue] = useState('');

    const handleChange = event => {
       
        setFormValue(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addTodo(formValue);
        setFormValue('');
    };

    const handleClear = event => {
        event.preventDefault();
        props.clearCompleted();
    };

    return (
        <form onSubmit = {handleSubmit}>
               <input 
               value = {formValue} 
               type = 'text' 
               name = 'todo' 
               onChange = {handleChange} />
               <div className = 'btnDiv'>
                <button>Add Todo</button>
                <button onClick = {handleClear}>Clear Completed</button>
               </div>
           </form>
    )

}

export default TodoForm;