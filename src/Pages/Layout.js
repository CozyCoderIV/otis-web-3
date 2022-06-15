import '../App.css'
import React from 'react'
import { Outlet, Link } from "react-router-dom";


function Layout() {
  return (
    <div id='layout-container'>
        <nav id='web-nav'>
          <div id='nav-title-container'>
            <h3 id='nav-title-A'>Otis</h3>
            <h3 id='nav-title-B'>Jackson IV</h3>
          </div>

          <div id='nav-item-container'>
            <Link to="/"><h3 className='nav-title'>Home</h3></Link>
            <Link to="/resume"><h3 className='nav-title'>Resume</h3></Link>
            <Link to="/project"><h3 className='nav-title'>Projects</h3></Link>
          </div>
        </nav>

        <Outlet/>
    </div>
  )
}

export default Layout