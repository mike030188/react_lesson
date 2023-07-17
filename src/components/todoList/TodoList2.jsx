import React  from "react";
import {Container, Input, Main, Title} from "./TodoList2.style";



const TodoList2 = () => {
  

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
                /* value={text}
                onChange={handleChange} */
            />
            <button            
               /*  onClick={() => {
                setText("");
                setTodoList([
                    {
                    id: todoList.length,
                    text: text,
                    },
                    ...todoList,
                ]);
                }} */
            >
                Add Task
            </button>
            </Input>   
            <Title>
                <div style={{display:'flex', 
                    flex: '1', 
                    justifyContent: 'center'
                }}>#</div>
                <div style={{display:'flex', 
                    flex: '4', 
                    justifyContent: 'center'
                }}>Task Name</div>
                <div style={{display:'flex', 
                    flex: '2', 
                    justifyContent: 'center'
                }}>Status</div>
                <div style={{display:'flex', 
                    flex: '2', 
                    justifyContent: 'center'
                }}>Edit</div>
                <div style={{display:'flex', 
                    flex: '2', 
                    justifyContent: 'right',
                    paddingRight:'8px'
            }}>Remove</div>
            </Title>
      <Container>
        

      </Container>
    </Main>
  );
};

export default TodoList2;
