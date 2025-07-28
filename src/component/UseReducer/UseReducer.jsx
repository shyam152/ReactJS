import React, { useReducer } from 'react'

const initialState = { count: 0 }
const initialMode = { mode: 'light' }

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            return state
    }
}

const modeReducer = (state, action) => {
    switch (action.type) {
        case 'dark':
            return { ...state, mode: 'dark' }
        case 'light':
            return { ...state, mode: 'light' }
        default:
            return state
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [mode, dispatchMode] = useReducer(modeReducer, initialMode)
    return (
        <div className={`h-screen w-full flex flex-col items-center justify-center ${mode.mode === "dark" ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
            <h1>Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>

            <button onClick={() => dispatchMode({ type: mode.mode === 'light' ? 'dark' : 'light' })}>Mode</button>
        </div>
    )
}

export default UseReducer;
