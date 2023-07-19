import styled from 'styled-components';


export const Main = styled.div`
background-color:#FFF;
height: 100vh;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Roboto', sans-serif;

`

export const Container = styled.div`
border-top: 2.5px solid darkgrey;
height: 390px;
width: 1000px;

p{  
    
:hover{
    cursor: pointer;  
    }
}
`

export const Input = styled.div`
display:flex;
width: 1000px;
margin-bottom: 15px;

input{
    width: 100%;
    margin-right: 30px;    
    border-radius: 7px;
    padding: 10px;
    font-size:16px;
    border:none;    
}

button{
    background-color: #FFF;
    width: 120px;
    padding:10px;
    border-radius: 7px;
    border: 1px solid #00ffff;
    font-size: 16px;
    color: #00ffff;
    font-weight: 500;
    
}


`


export const Title = styled.div`
display: flex;
align-items: center;
width: 1000px;
font-weight: 600;
font-size:20px;
`

export const Task = styled.div`
display: flex;
align-items: center;
padding: 10px 0;
border-bottom: 1px solid darkgrey;
background-color: #FFF;
font-size: 20px;
letter-spacing: 1.5px;


button{
        border-radius: 8px;
        background-color: transparent;
         
        font-size: 18px;
    }
`