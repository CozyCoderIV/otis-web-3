import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function Foot() {
  return (
    <div id='foot-container'>
      <div id='flink-container'>
            <a id='fl-1' href='https://github.com/CozyCoderIV' target="_blank"><FaGithub id='f-git'/></a>
            <a id='fl-2' href='https://www.instagram.com/o.j.daprince_iv/' target="_blank"><FaInstagram id='f-inst'/></a>
            <a id='fl-3' href='https://www.linkedin.com/in/otis-jackson4/' target="_blank"><FaLinkedin id='f-link'/></a>
      </div>
      <div id='quote-container'>
            <div id='foot-text'>"Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination </div>
            <div id='foot-text2'>embraces the entire world, and all there ever will be to know and understand." - Albert Einstein</div>
      </div>
      <div id='foot-banner'></div>

    </div>
  )
}

export default Foot