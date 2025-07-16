import React, { useEffect, useState } from 'react'
import Loader from './Loader'

const PokemonApi = () => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  const [loader, setLoader] = useState(true)
  const ApiUrl = "https://pokeapi.co/api/v2/pokemon"

  const fetchPoke = async () => {
    try {
      let res = await fetch(ApiUrl)
      let data = await res.json()

      const urlData = data.results.map(async (curr) => {
        let res = await fetch(curr.url)
        let data = await res.json();
        return data
      })

      const response = await Promise.all(urlData)
      setData(response)
      setLoader(false)
    } catch (error) {
      setLoader(false)
      console.log(error);

      
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    const newData = data.filter((val) => val.name.toLowerCase().includes(search.toLowerCase()))
    setData(newData)

  }


  useEffect(() => {
    setTimeout(() => {
      fetchPoke()
    }, 3000)
  }, [])

  if (loader) {
    return (
      <>
        <Loader />
      </>
    )
  }


  return (
    <div className='h-screen w-full flex flex-col items-center'>
      <form action="" className='h-96 my-30'>
        <input className='border h-10 w-[60vw]' type="text" name="" id="" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch} className='border h-10 w-20 bg-blue-400'>Search</button>
      </form>
      <div className='h-screen w-full flex flex-wrap mx-auto justify-center gap-20'>
        {
          data.map((curr, index) => {
            return (
              <div key={index} className="h-96 w-96 border text-center">
                <h1>{curr.name}</h1>
                <img className='h-80 w-80' src={curr.sprites.back_default} alt="" />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default PokemonApi
