import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './components/todoList/TodoList';
import TodoList1 from './components/todoList/TodoList1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
      {/* <TodoList/> */}
    <TodoList1/>
    
    
  </React.StrictMode>
);

