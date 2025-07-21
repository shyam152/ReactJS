import React,{useMemo, useState} from 'react'
import MemoCount from './MemoCount';

const ExternalElem = ()=>{

    let sum = 0;
    for(let i = 0; i < 100000; i++){
        sum += i;
    }

    let val = useMemo(() => {
        return sum;
    }, []);

    return(
        <h1>Sum : {val}</h1>
    )
}

const UseMemo = () => {
    const[count, setCount] = useState(0);
  return (
    <div>
        {/* <ExternalElem/> */}

        <h1>Counter :{count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <MemoCount/>
        {/* <h1>UseMemo Component</h1>
        <p>This component demonstrates the use of useMemo to optimize performance by memoizing expensive calculations.</p>
        <p>Check the console to see the sum calculation only happens once.</p>
        <p>Subsequent renders will not recalculate the sum, improving performance.</p>
        <p>Use this component to understand how useMemo can help in avoiding unnecessary calculations.</p>
        <p>Remember to import useMemo from React when implementing this in your own components.</p>
        <p>UseMemo is particularly useful in scenarios where expensive calculations are involved.</p>    */}
    </div>
  )
}

export default UseMemo
