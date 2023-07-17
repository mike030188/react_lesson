import styled from 'styled-components';


export const Main = styled.div`
background-color:#FFF;
height: 100vh;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Roboto', sans-serif;
border: 1px solid red;

P{
    
}
`

export const Container = styled.div`
display: flex;

border: 1px solid red;
height: 390px;
width: 1000px;
`

export const Input = styled.div`
display:flex;
width: 1000px;
margin-bottom: 30px;

input{
    width: 100%;
    border:1px solid #2c6beb;
    margin-right: 30px;    
    border-radius: 7px;
    padding: 10px;
    font-size:16px;

    
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
justify-content: center;
width: 1000px;
border: 1px solid black;

div{
    flex:1;
}
`