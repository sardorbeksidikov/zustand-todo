import React from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Sardorbek's Todo List</h1>
      </header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;