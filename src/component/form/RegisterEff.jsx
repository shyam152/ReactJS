import { useState } from "react"


export const RegisterEff = () => {

    // const [fullname, setFullname] = useState("")
    // const [email, setEmail] = useState("")
    // const [number, setNumber] = useState("")
    // const [password, setPassword] = useState("")
    // const [confirm, setConfirm] = useState("")

    const [data,setData] = useState({
        fullname:"",
        email:"",
        number:"",
        password:"",
        confirm:"",
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;
       setData((prev)=>({...prev,[name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
    }

    return (
        <form className="h-[60vh] w-96  flex flex-col gap-2 py-10 px-5 shadow-2xl" onSubmit={handleSubmit}>
            <h1 className="font-bold text-3xl">Register Your Account</h1>

            <label htmlFor="fullname">Fullname</label>
            <input className="border" type="text" name="fullname" id="fullname" value={data.fullname} onChange={handleInputChange} />

            <label htmlFor="email">Email</label>
            <input className="border" type="text" name="email" id="email" value={data.email} onChange={handleInputChange} />

            <label htmlFor="number">Mobile Number</label>
            <input className="border" type="text" name="number" id="number" value={data.number} onChange={handleInputChange} />

            <label htmlFor="password">Password</label>
            <input className="border" type="text" name="password" id="password" value={data.password} onChange={handleInputChange} />

            <label htmlFor="confirm">Confirm Password</label>
            <input className="border" type="text" name="confirm" id="confirm" value={data.confirm} onChange={handleInputChange} />

            <button className="h-10 w-full rounded-4xl text-xl font-bold text-center bg-violet-600 text-white " type="submit">Submit</button>
        </form>
    )
}

