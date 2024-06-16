import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';

import ToDoList from './components/ToDolist';
import './App.css';
import Form from './components/form';


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos]=useState([]);

  useEffect(()=>{
   filterHandler();
  },[todos, status])

  const filterHandler =()=>{
    switch (status){
      case "completed":
        setFilteredTodos(todos.filter((todo)=> todo.completed===true));
        break;
        case "uncompleted":
          setFilteredTodos(todos.filter((todo)=> todo.completed===false));
          break;
          default:
            setFilteredTodos(todos);
            break;
    }
  };

  return (
    <div className="App">
      <header>
       <h1>TODO LIST</h1>
      </header>
      <Form todos={todos}
      setTodos={setTodos}
      inputText={inputText}
      setInputText={setInputText} 
      setStatus={setStatus}
      />
      <ToDoList filteredTodos={filteredTodos} todos= {todos} setTodos={setTodos} />
      
    </div>
  );
}

export default App;
