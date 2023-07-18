import React, { useState }  from "react";
import {Container, Input, Main, Task, Title} from "./TodoList2.style";
import { FaTrashAlt } from "react-icons/fa";
import {GrEdit} from 'react-icons/gr';

function toListInfo() {
    const toDoListText = [];
    for (let i = 0; i < 0; i++) {
      toDoListText.push({
        id: i,
        text: (i + 1),
      });
    }
  
    return toDoListText;
  }

const TodoList2 = () => {
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
        <div style={{display:'flex', flexDirection:'column', width:'1000px'}}>
           <h1>TODO List Demo App</h1>
            <p style={{margin:"5px 0 50px 0",
                background:'lightyellow', width:'70px'
                }}>Do it now.</p> 
        </div>     
        <Input>
            <input    
                      
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
                Add Task
            </button>
            </Input>   
            <Title>
                <div style={{display:'flex', 
                    flex: '1', 
                    justifyContent: 'center',
                    
                }}>#</div>
                <div style={{display:'flex', 
                    flex: '5', 
                    justifyContent: 'center',
                    
                }}>Task Name</div>
                <div style={{display:'flex', 
                    flex: '2', 
                    justifyContent: 'center',
                    
                }}>Status</div>
                <div style={{display:'flex', 
                    flex: '1', 
                    justifyContent: 'center',
                    
                }}>Edit</div>
                <div style={{display:'flex', 
                    flex: '1', 
                    justifyContent: 'center',
                    
                    
            }}>Remove</div>
            </Title>
      <Container>
                    
            <p>
                {todoList.map((item) => (
                    
                <Task key={item.id}>
                    <div style={{display:'flex', 
                                flex: '1', 
                                justifyContent: 'center',
                                

                                }}>{item.id}</div>

                    <div style={{display:'flex', 
                                flex: '5', 
                                justifyContent: 'center',
                                textAligLast: 'justify',
                                
                                }}>{item.text}</div>
                    <div style={{display:'flex', 
                                flex: '2', 
                                justifyContent: 'center',                        

                                }}><button style={{border:'1px solid orange',
                                                padding:'10px',
                                                color:'orange'
                                                }}>In process</button></div>       
                                             
                    <div style={{display:'flex', 
                                flex: '1',  
                                justifyContent:'center', 
                                border:'none',
                                                   
                                }}>
                                    <button style={{padding:'10px 12px', border:'1px solid #00ffff',}}>
                                        <GrEdit style={{fontSize:'20px', color:'#00ffff'}} /* onClick={() => editTodo(item.id)}  *//>
                                    </button>
                    </div>

                    <div style={{ display:'flex',
                                flex: '1', 
                                justifyContent:'center',
                                border:'none',
                                
                                }}>
                                    <button style={{padding:'10px 12px', border:'1px solid grey', }}>
                                        <FaTrashAlt style={{color:'darkgrey', fontSize:'20px'}} onClick={() => deleteTodo(item.id)} />
                                    </button>
                                
                    </div>
                                       
                </Task>
                ))}
            </p>
            
            

      </Container>
    </Main>
  );
};

export default TodoList2;
