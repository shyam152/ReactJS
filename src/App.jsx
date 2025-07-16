import React, { useState } from 'react'
import Card from './component/Styling/CArd'
import Header from './component/Layout/Header'
import details from '../api/details.json'
import { Register } from './component/form/Register'
import { RegisterEff } from './component/form/RegisterEff'
import UseEffect from './component/UseEffect/UseEffect'
import Jokes from './component/data/Jokes'
import PokemonApi from './component/data/PokemonApi'
import UseRef from './component/UseRef/UseRef'
import { DataProvider } from './component/ContextAPi/Store'
import UseContext from './component/ContextAPi/UseContext'
const App = () => {
    //Javascript code can be added here if needed
    // For example, you can define styles or state variables  
    // const[count,setCount] = useState(0)

    // const handleclick=()=>{
    //     setCount(count+1)
    // }

    return (
        //html + JSX code
        // You can use the Card component here
        // <div className='h-screen w-full'>
        //     <Header />
        //     <ul className='h-screen w-full grid grid-cols-4 justify-center items-stretch  gap-x-2 gap-y-10 p-10 mx-10'>
        //         {
        //             details.map((curr) => <Card details={curr} />)
        //         }
        //     </ul>
        // </div>
        <div className='h-screen flex items-center justify-center'>
            {/* <h1>{count}</h1> */}
            {/* <button onClick={handleclick}>Increment</button> */}

            {/* <Register /> */}
            {/* <RegisterEff/> */}
            {/* <UseEffect/> */}
            {/* <Jokes/> */}
            {/* <PokemonApi/> */}
            {/* <UseRef/> */}

            <DataProvider>
                <UseContext/>
            </DataProvider>
        </div>
    )
}

export default App
