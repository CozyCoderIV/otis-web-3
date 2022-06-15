import React from 'react'
import { DiJava, DiJavascript, DiJsBadge, DiPython, DiReact} from "react-icons/di";
import { FaCuttlefish } from "react-icons/fa";

function SectorB() {
  return (
    <div id='sector-B'>
        <div id='education-box'>
            <div id='education-title-box'><h2>Education</h2></div>
            <div id='education-title-banner'></div>

            <div id='schoolA' className='e-item'><h3>Aledo High School</h3><h3 id='edateA'>Fall of 2016-Spring of 2020</h3></div>
            <div id='schoolB' className='e-item'><h3>Weatherford College</h3><h3 id='edateB'>Spring of 2018-Spring of 2020</h3></div>
            <div id='schoolC' className='e-item'><h3>Louisiana State University</h3><h3 id='edateC'>Fall of 2020-Current</h3></div>
        </div>

        <div id='skillset-box'>
            <div id='skillset-title-box'><h2>Technologies / Lang.</h2></div>
            <div id='skillset-title-banner'></div>

            <div id='skillset-name-container'>
                <h4>React</h4>
                <h4>Javascript</h4>
                <h4>Python</h4>
                <h4>Java</h4>
                <h4 id='c-title'>C</h4>
            </div>
            <div id='skillset-icon-container'>
                <DiReact id='i-react'/>
                <DiJsBadge id='i-js'/>
                <DiPython id='i-py'/>
                <DiJava id='i-java'/>
                <FaCuttlefish id='i-c'/>
            </div>
        </div>
    </div>
  )
}

export default SectorB