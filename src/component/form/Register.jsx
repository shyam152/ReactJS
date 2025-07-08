import { useState } from "react"


export const Register = () => {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            fullname,
            email,
            number, 
            password,
            confirm
        }

        console.log(formData);  
    }

    return (
        <form className="h-[60vh] w-96  flex flex-col gap-2 py-10 px-5 shadow-2xl" onSubmit={handleSubmit}>
            <h1 className="font-bold text-3xl">Register Your Account</h1>

            <label htmlFor="fullname">Fullname</label>
            <input className="border" type="text" name="fullname" id="fullname" value={fullname} onChange={(e)=>setFullname(e.target.value)} />

            <label htmlFor="email">Email</label>
            <input className="border" type="text" name="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <label htmlFor="number">Mobile Number</label>
            <input className="border" type="text" name="number" id="number" value={number} onChange={(e)=>setNumber(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input className="border" type="text" name="password" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} />

            <label htmlFor="confirm">Confirm Password</label>
            <input className="border" type="text" name="confirm" id="confirm" value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>

            <button className="h-10 w-full rounded-4xl text-xl font-bold text-center bg-violet-600 text-white " type="submit">Submit</button>
        </form>
    )
}

