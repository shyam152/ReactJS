import React, { memo, useRef } from 'react'

const MemoCount = memo(() => {
    const count = useRef(0);
    console.log(count.current);
    
  return (
    <div>
      <h1>I have rendered this much of Count: {count.current++}</h1>
        
    </div>
  )
})

export default MemoCount
