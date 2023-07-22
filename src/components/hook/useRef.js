import {useRef} from 'react';


 /* alert button */ 

// export default function UseRefComponent () {
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

export default function () {
    let inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }
    return (
        <>
            <input type="text" ref={inputRef}></input>
            <button onClick={handleClick}>Alert Button</button>
        </>
    )
}



