import {useRef} from 'react';

export default function UseRefComponent () {
    let ref = useRef(0);
    
    function handleClick() {
        ref.current = ref.current + 1;
        alert("Increament + 1")
    }

    return (
        <>
            <button onClick={handleClick}>Alert Button</button>
        </>
    )
}