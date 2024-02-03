import React from 'react'


import './navBar.css'

import DarkMood from './assets/Medium.svg'




function navBar() {
  return (

    <div className='nav'>

      <h2 className='logo'>Web<span>3</span>Mio</h2>
      <div className="menu">
        <h2>Services</h2>
        <h2>Portfolio</h2>
        <h2>About</h2>
      </div>
      
      <img src={DarkMood} alt="Darkmood" />

    </div>
    
  )
}

export default navBar