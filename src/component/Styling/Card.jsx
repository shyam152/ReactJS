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


    const {title, desc,rating,casts} = details;

  return (
    <div className={`h-96 w-[300px] items-stretch text-gray-600 shadow-2xl p-5 ${rating>8.7 ? "bg-violet-900":"bg-red-300"}`}>
      <h2 className='m-0 text-2xl'>Card Title {title}</h2>
      <p className='font-bold text-white'>{desc}</p>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
      <p className='font-bold'>Rating <span >{rating}</span> </p>
      <p className='font-bold'>Casts : {
        casts.map((e)=><span>{e}, </span>)
        }
      </p>
      <button className='bg-violet-400 px-5 py-2 w-full rounded-2xl'>Watch Now</button>
=======
      <button>Watch Now</button>
>>>>>>> Stashed changes
=======
      <button>Watch Now</button>
>>>>>>> Stashed changes
    </div>
  )
}

export default Card
