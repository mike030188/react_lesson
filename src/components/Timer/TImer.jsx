import {useEffect, useRef, useState} from 'react';

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
    
    

    useEffect(() => {
        handleStart();
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
        interval




        if (startTime != null && liveTime != null) {
            timeShow = (liveTime - startTime) / 1000;
        }

    
    return(
        <>
            <h1>Timer:{timeShow}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleReset}>Reset</button>
            <button 
                onClick={() => {
                    setText("");
                    setTodoList([
                        {
                            id: todoList.length,
                            text: text,
                        }, 
                        ...todoList,
                    ])
                }}
                >Add</button>
            <div>Results:{todoList.map((item) => (
                <div key={item.id}>{liveTime}</div>
            ))}
                
            </div>


        </>
    )
}