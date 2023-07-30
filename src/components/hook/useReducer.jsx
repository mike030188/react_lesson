import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { number: state.number + 1, showText: state.showText, showText1: state.showText1 }
        case "setShowText":
            return { number: state.number, showText: !state.showText }
        case "setShowText1":
            return { number: state.number, showText1: !state.showText1 }
        default:
            return state;
    }
}

const UseReducerComp = () => {
    const [state, dispatch] = useReducer(reducer, { 
        number: 0, 
        showText: true,
        showText1: false,

    })

    return (
    
        <div>
            <h1>{state.number}</h1>
            <button onClick={() => {
                dispatch({ type: "INCREMENT" })
                dispatch({ type: "setShowText" })            

            }}>Click Here</button>
            {state.showText ? 'Aka' : " Uka"}
            
        </div>       
        
    
  )
}

export default UseReducerComp