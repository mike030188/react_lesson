import styled from "styled-components";


export const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
padding-top: 50px;

.button-wrap{
    padding: 40px 0px  ;
    display: flex;
}
.result-wrap{
    display:flex;
    flex-Direction:column;
    justify-Content:left;
    padding-Left:10px;
    border: 1px solid violet;
    margin-left:10px;
    width: 395px;   
  
}

h2{
  font-size: 22px;
  padding-right: 20px;
}
`

export const Title = styled.div`
display:flex;
justify-content: flex-start;
padding-left: 10px;

h1{
    display:flex;   
    font-size: 40px;
    background-color: slateblue;
    color: white;
    justify-content: flex-start;
    width: 395px;
    align-items: center;
    padding-left: 10px;
    height: 90px;
    border-radius: 8px;
}

`
export const Button = styled.div`
padding: 7px 22px;
margin: 0 8px;
border-radius: 8px;
background-color:#cce7ff;
cursor: pointer;
font-size: 20px;
font-weight:600;

&:hover{
    background-color: #0000cc;
    color: white;
}

`