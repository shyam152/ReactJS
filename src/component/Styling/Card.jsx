import React from 'react'

const Card = ({details}) => {
    // const cardStyle={
    //     border: '1px solid #ccc',
    //     borderRadius: '8px',
    //     padding: '16px',
    //     boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    //     maxWidth: '300px',
    //     margin: '16px auto',
    //     textAlign: 'center'
    // }


    const {title, desc} = details;

  return (
    <div className='h-96 w-[200px] bg-[red]'>
      <h2 className='m-0 text-2xl'>Card Title {title}</h2>
      <p className='font-bold text-white'>{desc}</p>
    </div>
  )
}

export default Card
