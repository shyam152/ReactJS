import React from 'react'
import Card from './component/Styling/CArd'
import Header from './component/Layout/Header'
import details from '../api/details.json'
const App = () => {
    //Javascript code can be added here if needed
    // For example, you can define styles or state variables  
    

    return (
        //html + JSX code
        // You can use the Card component here
        <div className='h-screen w-full'>
            <Header />
            <ul className='h-screen w-full flex  justify-center items-center gap-10'>
                {
                    details.map((curr) => <Card details={curr} />)
                }
            </ul>
        </div>
    )
}

export default App
