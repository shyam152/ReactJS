import React, { memo } from 'react'
import { useState, useCallback } from 'react'

const Button = memo(({ onClick, children }) => {
    console.log('Button rendered');
    return (
        <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
            {children}
        </button>
    )
})

const UseCallback = () => {
    const [count, setCount] = useState(0)
    const [countOther, setCountOther] = useState(0)

    const increment = useCallback(() => {
        setCount(c => c + 1)
    }, [])

    const incrementother = useCallback(() => {
        setCountOther(c => c + 1)
    }, [])
    return (
        <div>
            <h1>{count}</h1>
            <h1>{countOther}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={incrementother}>IncrementOther</Button>
            <p>UseCallback Example</p>
        </div>
    )
}

export default UseCallback
