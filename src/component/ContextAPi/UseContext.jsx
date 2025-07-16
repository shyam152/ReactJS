import React, { useContext } from 'react'
import { CreateDataContext, DataProvider } from './Store'

const UseContext = () => {
    const{myName,myAge} = useContext(CreateDataContext)
  return (
    <div>
      <h1>MyName : {myName}</h1>
      <h1>MyAge : {myAge}</h1>
    </div>
  )
}

export default UseContext
