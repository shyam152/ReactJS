import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    <header className='h-[10vh] w-full flex justify-between items-center gap-10 shadow bg-violet-300 px-5'>
        <div className="">
            <h1 className='font-bold text-4xl text-white'>Clickerrr..</h1>
        </div>
        <div className="flex items-center justify-center gap-5 text-2xl">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Services</h3>
            <h3>Contact</h3>
        </div>
        <div className="">
            <input className='border h-[5vh] w-[300px] rounded-4xl' type="search" name="" id="" />
        </div>
        {/* <button className='bg-white rounded-4xl px-5 py-2'>Sign in</button> */}
        <Button color={"red"} value={"Signin"}/>
    </header>
  )
}

export default Header
