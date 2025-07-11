import React from 'react'
import "./Card.css"

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default Card
