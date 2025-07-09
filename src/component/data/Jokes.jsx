import React, { useEffect, useState } from 'react'

const Jokes = () => {
    const [data,setData] = useState("")
    const apiUrl = "https://icanhazdadjoke.com/"

    const handleData = async()=>{
        let res = await fetch(apiUrl,{
            headers:{
                accept:"application/json"
            }
        })
        let data = await res.json();
        setData(data.joke)      
    }

    useEffect(()=>{
        handleData()
    },[])


  return (
    <div>
      <h1>Dad Jokes</h1>
      <p>{data}</p>
      <button onClick={handleData}>Next</button>
    </div>
  )
}

export default Jokes
