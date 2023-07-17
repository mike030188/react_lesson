import React  from "react";
import {Container, Main} from "./TodoList2.style";



const TodoList2 = () => {
  

  return (
    <Main>
        <div style={{display:'flex', flexDirection:'column', width:'1000px'}}>
           <h2>TODO List Demo App</h2>
            <p style={{margin:"5px 0 80px 0",
                background:'lightyellow', width:'70px'
                }}>Do it now.</p> 
        </div>
        
      <Container>

      </Container>
    </Main>
  );
};

export default TodoList2;
