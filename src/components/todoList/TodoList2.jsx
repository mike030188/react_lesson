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
                <div>#</div>
                <div>Task Name</div>
                <div>Status</div>
                <div>Edit</div>
                <div>Remove</div>
            </Title>
      <Container>
        

      </Container>
    </Main>
  );
};

export default TodoList2;
