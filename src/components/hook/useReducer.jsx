import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { number: state.number + 1, showText: state.showText }
        case "setShowText":
            return { number: state.number, showText: !state.showText }
        default:
            return state;
    }
}

const UseReducerComp = () => {
    const [state, dispatch] = useReducer(reducer, { 
        number: 0, 
        showText: false 
    })

    return (
    <div>
        <h1>{state.number}</h1>
        <button onClick={() => {
            dispatch({ type: "INCREMENT" })
            dispatch({ type: "setShowText" })

        }}>Click Here</button>
        {state.showText && <h1>Show Text</h1>}
    </div>
  )
}

export default UseReducerComp