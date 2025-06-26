import React from 'react'

const Button = ({value,color}) => {
  return (
    <button className={`border rounded-4xl px-5 py-2 ${color=="red"?"bg-red-400":"bg-blue-400"}`}>{value}</button>
  )
}

export default Button
