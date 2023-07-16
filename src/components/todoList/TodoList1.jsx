import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { Container, Input, Main, Todos } from "./TodoList1.style";

function toListInfo() {
  const toDoListText = [];
  for (let i = 0; i < 0; i++) {
    toDoListText.push({
      id: i,
      text: "Item:" + (i + 1),
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

  const deleteTodo = (id) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <Main>
      <Container>
        
        <Input>
          <input    
            autoFocus        
            type="text"
            value={text}
            onChange={handleChange}
          />
          <button            
            onClick={() => {
              setText("");
              setTodoList([
                {
                  id: todoList.length,
                  text: text,
                },
                ...todoList,
              ]);
            }}
          >
            Add
          </button>
        </Input>
        <Todos>
          <p>
            {todoList.map((item) => (
                
              <div style={{ width: "100%", 
                    display:'flex', 
                    justifyContent: 'space-between', 
                    alignItems:'center',
                    padding:'10px',
                    border: '1px solid grey', 
                    backgroundColor:'#c5e1e5',
                    borderRadius: '8px',
                    margin: '12px 0',
                    fontSize: '20px',
                    letterSpacing: '2px'
                }} 
                    key={item.id}>
                <div>{item.text}</div>
                <div style={{padding:'10px 12px', borderRadius:'8px', backgroundColor:'#1c1ca1'}}><FaTrashAlt color="white" onClick={() => deleteTodo(item.id)} /></div>
                
              </div>
            ))}
          </p>
          
        </Todos>
      </Container>
    </Main>
  );
};

export default TodoList1;
