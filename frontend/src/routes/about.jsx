import React from 'react'
import "./about.css"
import Nav from '../components/nav'

const About = () => {
  return (
    <div>

      <Nav />
      <div id='about'>
        <h1 className='aboutMe'>About me</h1>

        <div className='aboutpara'>
          <p >I’m an MCA student passionate about full-stack development and UI/UX design.
            I have strong skills in HTML and Tailwind CSS, and I’m actively building modern,
            responsive web projects. I recently completed a UI/UX bootcamp by Design Phoenix and
            received full-stack training from JM Tech Institute. I enjoy creating clean and user-friendly
            designs using Canva, Photoshop, and Figma. I’m always exploring new tools and ideas, and I’m active
            on LinkedIn where I regularly share my work. </p>
        </div>
      </div>
    </div>
  )
}

export default About