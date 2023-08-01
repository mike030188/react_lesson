import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './components/todoList/TodoList';
import TodoList1 from './components/todoList/TodoList1';
import TodoList2 from './components/todoList/TodoList2';
import UseRefComponent from './components/hook/useRef';
import TimerComp from './components/Timer/TImer';
import PopupComp from './components/hook/Popup';
import UseReducerComp from './components/hook/useReducer';
import ZindexMinus from './components/test/w3school';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     
    {/*   <TodoList/> */}    {/* useState */}

    {/* <TodoList1/> */}    {/* useState */}

    {/* <TodoList2/> */}   {/* useState && Popup (incl. HomeTask - done) */}

    {/* <UseRefComponent /> */}     {/* Alert, Timer, useRef */}

    {/* <TimerComp/>  */}  {/* HomeTask - done!*/}

    {/* <PopupComp/> */}

    {/* <UseReducerComp/> */}

    <ZindexMinus/>
    
    
  </React.StrictMode>
);

