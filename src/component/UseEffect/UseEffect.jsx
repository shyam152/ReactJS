import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {
            setCount(count + 1)
        }, 100);

        return ()=> clearInterval(interval)
    }, [count])

    return (
        <div>
            <h1>{count}</h1>
            {/* <h2>{date}</h2> */}
            {/* <button onClick={() => setCount(count + 1)}>Click</button> */}
        </div>
    )
}

export default UseEffect
