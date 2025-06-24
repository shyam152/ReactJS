import React from 'react'

const Card = () => {
    const cardStyle={
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        maxWidth: '300px',
        margin: '16px auto',
        textAlign: 'center'
    }
  return (
    <div style={cardStyle}>
      <h2 style={{ margin: '0 0 8px', fontSize: '24px' }}>Card Title</h2>
      <p>This is a description of the card.</p>
    </div>
  )
}

export default Card
