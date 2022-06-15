import React from 'react'
import ReactPlayer from 'react-player'; 
import {FaGithub, FaStarHalfAlt} from "react-icons/fa";

function SectorA() {
  return (
    <div id='sector-A'>
        <div id='label-box'>
            <div id='label-title-box'><h2>Featured Project</h2></div>
            <div id='label-title-banner'></div>

            <div id='label-table'>
                <div id='start-date-box'><h3>Start Date:</h3><h3 id='dateA'>03/01/2021</h3></div>
                <div id='end-date-box'><h3>Finish Date:</h3><h3 id='dateB'>12/27/2021</h3></div>

                <div id='diff-box'>
                    <h3>Diff Lvl:</h3>
                    <div id='star-box'>
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                        <FaStarHalfAlt />
                    </div>
                </div>

                <div id='code-box'>
                    <h3>Project Type:</h3>
                    <div id='lang-box'><h3>Java</h3></div>
                    <a href='https://github.com/CozyCoderIV/Galaga-VII/tree/main' target='_blank'><FaGithub id='code-icon'/></a>
                </div>
            </div>
        </div>

        <div id='descript-box'>
            <div id='descript-title-box'><h2>Galaga VII</h2></div>
            <div id='descript-title-banner'></div>

            <div id='descript-paragraph-box'>
                <p>"This is the official first completed and developed video game I've completed. As a graphics artist myself, all of the artwork is originally made by me. This project was heavily influenced by the classic arcade game known as Galaga. The drive and motivation behind this particular project was to showcase how far I'm willing to go as a young dev/artist to fundamentally understand the core concepts of game design without using an actual game engine."</p>
            </div>
        </div>

        <div id='video-box'>
            <ReactPlayer controls autoplay width='470px' height='358px' url=" https://youtu.be/gK-QEVaVFCw"/>
        </div>
    </div>
  )
}

export default SectorA