import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

/**
 * Outlet component that renders the Header, Outlet (from React Router), and Footer components.
 *
 * @returns {React.ReactElement} The rendered components.
 */

const Outlet = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />    
        </>
    )
}

export default Outlet
