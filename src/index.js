import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './components/todoList/TodoList';
import TodoList1 from './components/todoList/TodoList1';
import TodoList2 from './components/todoList/TodoList2';
import UseRefComponent from './components/hook/useRef';
import TimerComp from './components/Timer/TImer';
import PopupComp from './components/hook/Popup';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
    {/*   <TodoList/> */}    {/* useState */}

    {/* <TodoList1/> */}    {/* useState */}

    {/* <TodoList2/> */}   {/* useState && Popup (incl. HomeTask) */}

  {/* <UseRefComponent /> */}     {/* Alert, Timer, useRef */}

  <TimerComp/>   {/* HomeTask */}

  {/* <PopupComp/> */}
    
    
  </React.StrictMode>
);

