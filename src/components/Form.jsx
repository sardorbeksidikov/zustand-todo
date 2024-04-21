import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; 
import { FaPlusSquare } from "react-icons/fa";
import { useBoundStore } from "../stores/useBoundStore";


const Form = () => {
  const [inputText, setInputText] = useState(""); 
  const addTodo = useBoundStore((state) => state.addTodo);
  const setFilterStatus = useBoundStore((state) => state.setFilterStatus);
  
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

 
  const submitTodoHandler = (e) => {
    e.preventDefault(); 

    let newTodo = {
      text: inputText,
      completed: false,
      id: uuidv4(),
    };

    
    addTodo(newTodo);
    setInputText("");
  };

  
  const statusHandler = (e) => {
    setFilterStatus(e.target.value);
  };

  return (
    <form data-testid="form">
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />

      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <FaPlusSquare />
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
