import React from 'react'

const navbar = (props) => {
  return (
    <div>
      <div className='Mayukh'>{props.logoText }</div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default navbar
