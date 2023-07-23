import {useRef, useState} from 'react';


 /* alert button */ 

// export default function UseRefComponent() {
//     let ref = useRef(0);
    
//     function handleClick() {
//         ref.current = ref.current + 1;
//         alert("Increament + 1")
//     }

//     return (
//         <>
//             <button onClick={handleClick}>Alert Button</button>
//         </>
//     )
// }


/* Input(focus) on Alert Button */

// export default function UseRefComponent() {
//     let inputRef = useRef(null);

//     function handleClick() {
//         inputRef.current.focus();
//     }
//     return (
//         <>
//             <input type="text" ref={inputRef}></input>
//             <button onClick={handleClick}>Alert Button</button>
//         </>
//     )
// }


/* Timer */

export default function UseRefComponent(){
    const [startTime, setStartTime] = useState(null);
    const [liveTime, setLiveTime] = useState(null);
    const secondSetting = useRef(null);

    const handleStart = () => {
        setStartTime(Date.now);
        setLiveTime(Date.now);

        clearInterval(secondSetting.current);
        secondSetting.current = setInterval(() => {
            setLiveTime(Date.now());
        }, 10);
    };
    const handleStop = () => {
        clearInterval(secondSetting.current);       
    }

    let timeShow = 0;
        if (startTime != null && liveTime != null) {
            timeShow = (liveTime - startTime) / 1000;
        }

    
    return(
        <>
            <h1>Timer:{timeShow}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>

        </>
    )
}



