import React, { useState }  from "react";
import {Button, Container, Input, Main, Task, Title} from "./TodoList2.style";
import { FaTrashAlt } from "react-icons/fa";
import {GrEdit} from 'react-icons/gr';
import Popup from 'reactjs-popup';
import '../../index.css'



function toListInfo() {
    const toDoListText = [];
    for (let i = 0; i < 0; i++) {
      toDoListText.push({
        id: i,
        text: (i + 1),
        status: "Todo",
      });
    }
  
    return toDoListText;
  }
 

const TodoList2 = () => {
    const [todoList, setTodoList] = useState(toListInfo);
    const [text, setText] = useState("");
    const [editText, setEditText] = useState("");
    const [editItemId, setEditItemId] = useState("");
    const [status, setStatus] = useState("");
    


    const handleStatusChange = (e) => {
        setStatus(e.target.value);
      };

    const handleChange = (e) => {
        setText(e.target.value);
      };
   

    const handleEditClick = (id, text) => {
        setEditItemId(id);
        setEditText(text);
      };
    
      const handleSaveClick = (id) => {
        setTodoList(
          todoList.map((item) => item.id === id ? { ...item, text: editText, isEditing: false } : item)
        );
        setEditItemId(null);
        setEditText("");
      };

      const deleteTodo = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id));
        };


        console.log("status:", status)
  return (
    <Main>
        <div style={{display:'flex', flexDirection:'column', width:'1000px'}}>
           <h1>TODO List Demo App</h1>
            <p style={{margin:"5px 0 50px 0",
                background:'lightyellow', width:'70px'
                }}>Do it now.</p> 
        </div>     
        <Input>
        <Popup
                trigger={<Button > Add Task </Button>}
                modal
                nested
            >
                {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                    &times;
                    </button>
                    <div className="header"> New Task </div>
                    <div className="content">
                    <button>Task</button>
                    <input type="text" placeholder='Description of task'                         
                        value={text}
                        onChange={handleChange}
                      />
                      <input type="text" placeholder='status'                         
                        value={status}
                        onChange={handleStatusChange}
                      />
                
                    
                    </div>

                    <div className="actions">
                    <div>
                        <button className="button" onClick={close}> Close </button>                  
                    
                    </div>
                    <button style={{ background:'rgb(0,0,255)'}}
                        className="button"
                        onClick={() => {
                            
                            setText("");
                            setTodoList([
                              {
                                id: todoList.length,
                                text: text,
                              },
                              ...todoList,
                            ]);
                            console.log('modal close');
                            close();
                            
                          }}

                    >
                        SAVE
                    </button>
                    </div>
                </div>
                )}
            </Popup>
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
            <p>{todoList.sort((a, b) => a.id > b.id ? 1 : -1).map((item) => (                    
                <Task key={item.id}>
                    <div style={{display:'flex', 
                                flex: '1', 
                                justifyContent: 'center'
                                }}>{item.id+1}</div>

                    <div style={{display:'flex', 
                                flex: '5', 
                                justifyContent: 'center',
                                textAligLast: 'justify',
                                
                                }}>{editItemId === item.id ? (

                                <input type="text" style={{padding:'10px 12px', borderStyle:'dotted', fontSize:'16px', fontStyle:'italic', color:"red"}}
                                    value={editText} 
                                    onChange={(e) => setEditText(e.target.value)} />) : (item.text)}
                    </div>
                                
                    <div style={{display:'flex', flex: '2', justifyContent: 'center' }}>     
                    
                    {item?.status || "broken data"}
                    </div>       
                                             
                    <div style={{display:'flex', 
                                flex: '1',  
                                justifyContent:'center', 
                                border:'none',
                                                   
                                }}> {editItemId !== item.id ? (
                                        <button style={{padding:'10px 12px', border:'1px solid #00ffff'}}
                                            onClick={() => handleEditClick(item.id, item.text)}>
                                            <GrEdit style={{fontSize:'20px', color:'#00ffff'}} />
                                        </button>
                                    ) : (
                                        <div style={{display: 'flex'}}>
                                            <button style={{
                                                backgroundColor: 'transparent',
                                                borderRadius: "8px",
                                                border:'1px solid grey',
                                                padding: "10px 12px",
                                                color:'darkgrey',
                                            }} onClick={() => handleSaveClick(item.id)}> Save </button>
                                        </div> 
                                        )
                                    }
                                    
                    </div>

                    <div style={{ display:'flex',
                                flex: '1', 
                                justifyContent:'center',
                                border:'none',
                                
                                }}>
                                    <button style={{padding:'10px 12px', border:'1px solid grey', }}>
                                        <FaTrashAlt style={{color:'darkgrey', fontSize:'20px'}} 
                                            onClick={() => deleteTodo(item.id)} />
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
