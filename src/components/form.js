import React, { Component, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import { text } from '@fortawesome/fontawesome-svg-core';


const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {
    
    const inputTextHandler = (e) => {

        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            { text: inputText, completed: false, id: Date.now() }
            
        ]);
        setInputText("");
    }
    const statusHandler =(e)=>{
        setStatus(e.target.value)
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input' />
            <button onClick={submitTodoHandler} type='submit' className='todo-button'>
                <FontAwesomeIcon icon={faSquarePlus} />

            </button>
            <div className='select'>
                <select onChange={statusHandler} name='todos' className='filter-todo'>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );
}

export default Form;