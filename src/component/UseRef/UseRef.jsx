import React, { useId, useRef } from 'react'

const UseRef = () => {

    const username = useRef()
    const password = useRef()

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(username.current.value,password.current.value);
        
    }

    const id = useId()


    return (
        <form action="" className='flex flex-col gap-5' onSubmit={handleSubmit}>
            <input type="text" id={`username${id}`} className='border ' placeholder='Username' ref={username} />

            <input type="text" id={`password${id}`} className='border' placeholder='Password' ref={password} />

            <button type="submit" className='bg-blue-400 text-white' >Submit</button>
        </form>
    )
}

export default UseRef
