import {useEffect, useRef, useState} from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { Button, Main, Title } from './TimerStyle';

function timeListInfo() {
    const timeListText = [];
    for (let i = 0; i < 0 ; i++) {
        timeListText.push({
            id: i,
            text: "Result:" + (i + 1),
        });
    }

    return timeListText;
}

export default function TimerComp(){
    const [startTime, setStartTime] = useState(null);
    const [liveTime, setLiveTime] = useState(null);
    const [todoList, setTodoList] = useState(timeListInfo);
    const [text, setText] = useState("");  
    
    const deleteTodo = (id) => {
        setTodoList(todoList.filter((item) => item.id !== id));
        };

    useEffect(() => {
        /* handleStart(); */
        return () => clearInterval(secondSetting.current);
    }, []);
    
    const handleStart = () => {    
        clearInterval(secondSetting.current);
        interval = setInterval(startTime, 10)

        
        secondSetting.current = setInterval(() =>{
                       
            setLiveTime((prev)=> prev + 1);
            console.log(startTime);
        }, 10)       
        
    };

    const secondSetting = useRef();

    const handlePause = () => {
        clearInterval(secondSetting.current);       
    }

    const handleReset = () => {
        clearInterval(secondSetting.current);
        setStartTime(Date.now);        
        secondSetting.current = setInterval(() => {
            setLiveTime(Date.now());
        }, 10);
    }

    let timeShow = 0,
        interval;

        if (startTime != null && liveTime != null) {
            timeShow = (liveTime - startTime) / 1000;
        }

    
    return(
        <Main>
            <div style={{display:'flex',
                        flexDirection:'column', 
                        justifyContent:'left'}}>
                <Title>
                    <h1>Timer: <div style={{marginLeft:'30px',color:'#00FFFF' }}>{timeShow}</div></h1>
                </Title>
                <div className="button-wrap">
                    <Button onClick={handleStart}>Start</Button>
                    <Button onClick={handlePause}>Pause</Button>
                    <Button onClick={handleReset}>Reset</Button>
                    <Button onClick={() => {
                            setText("");
                            setTodoList([
                                {
                                    id: todoList.length,
                                    text: text,
                                }, 
                                ...todoList,
                            ])
                        }}
                        >Add</Button>
                </div>
                <div className="result-wrap">
                    <h2>Results:</h2>{todoList.map((item) => (
                        <div style={{display:'flex', 
                                    justifyContent:'space-between', 
                                    padding:'7px 0' , 
                                    color:'#778899', 
                                    alignItems:'center'}} key={item.id}>{liveTime}
                                    <button style={{border:'none', 
                                            backgroundColor:'transparent', 
                                            paddingRight:'10px' }}>
                                    <FaTrashAlt style={{color:'darkgrey', 
                                                fontSize:'17px',
                                                cursor: 'pointer'}} onClick={() => deleteTodo(item.id)} />
                                    </button>
                        </div>
                    ))}                
                </div>
            </div>
        </Main>
    )
}