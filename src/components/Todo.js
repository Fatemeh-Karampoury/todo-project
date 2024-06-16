import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck , faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({text, todo, todos, setTodos}) => {
    const deleteHaandler =()=>{
        setTodos(todos.filter((el)=> el.id !==todo.id))
    }
const completedHandler =()=>{
    setTodos(todos.map((item)=>{
        if(item.id === todo.id){
            return{
                ...item, completed: !item.completed
            }
        }
        return item;
    }))
}

    return ( 
        <div className='todo'>
            <li className={`todo-item ${todo.completed ? 'completed' : ""}`}>{text}</li>
         <button onClick={completedHandler} className='completed-btn'>
         <FontAwesomeIcon className='fa-check' icon={faCheck} />
         </button>

         <button onClick={deleteHaandler} className='trash-btn'>
         <FontAwesomeIcon className='fa-trash' icon={faTrash} />
         </button>
        </div>
     );
}
 
export default Todo;