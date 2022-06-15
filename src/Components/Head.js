import React from 'react'
import Night from '../Media/night-city.jpg'
import PP from '../Media/ProfPic(Web).png'

function Head() {
  return (
    <div id='head-container'>
        <div id='head-box'><h1>Welcome, I'm Otis Jackson IV</h1></div>
        <div id='head-banner'>Frontend Devloper / C.S.C Major</div>
        <img id='prof-pic' src={PP}></img>
        <img id='head-img' src={Night}></img>
    </div>
  )
}

export default Head