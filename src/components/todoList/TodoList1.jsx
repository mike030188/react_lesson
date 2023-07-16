import React, { useState } from 'react';
import {FaTrashAlt} from 'react-icons/fa';
import { Container, Input, Main, Todos } from './TodoList1.style';

function toListInfo () {
    const toDoListText = [];
    for (let i=0; i < 0; i++) {
         toDoListText.push({ 
        id: i,
        text: 'Item:' + (i + 1),
    });
    }

   return toDoListText;

}

const TodoList1 = () => {
    const [todoList, setTodoList] = useState(toListInfo);
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const deleteTodo = id => {
        setText(todoList.filter(item => item.id !== id))
    }
  return (
    <Main>
        <Container >
            <h2>Todo list</h2>
                <Input>                    
                    <input style={{width:'100%'}} type="text" value={text} onChange={handleChange}/>
                    <button style={{padding:'5px', background:'lightblue', border:'none'}}
                        onClick={() => {
                        setText("");
                        setTodoList([{
                            id:todoList.length,
                            text: text,
                        }, 
                        ...todoList
                    ]);
                    }}>Add</button>
                </Input>
                <Todos>
                    <p>{todoList.map((item) => (
                    <div style={{width:'100%'}}
                    key={item.id}>
                        {item.text}
                    <FaTrashAlt onClick={(item)=> deleteTodo(   )} />                       
                    </div>   
                    
                    ))}
                    </p>
                    
                    
                </Todos>
                
            </Container>
    </Main>
    
  );
};

export default TodoList1;