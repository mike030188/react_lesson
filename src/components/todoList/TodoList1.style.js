import styled from 'styled-components';


export const Main = styled.div`
background-color:#2461cc;
height: 100vh;
display:flex;
justify-content: center;
align-items: center;
font-family: 'Roboto', sans-serif;

`
    
  
export const Container = styled.div`

background-color: #FFF;
height: 490px;
width: 550px;
border-radius: 15px;
padding: 30px 15px;


`
export const Input = styled.div`
display:flex;
width: 100%;
margin-bottom: 50px;

input{
    width: 100%;
    border:1px solid #2c6beb;
    margin-right: 30px;    
    border-radius: 7px;
    padding: 10px;
    font-size:18px;

    
}
input:focus {
  border-color: red;
}



button{
    background-color: #2c6beb;
    width: 140px;
    padding:15px;
    border-radius: 7px;
    border: none;
    font-size: 20px;
    color: #fff;
    font-weight: 600;
}
`
export const Todos = styled.div`
display:flex;
/* overflow-y: scroll; */
width: 100%;
justify-content: space-between;


p{
    
    
    width: 100%;

}
`
