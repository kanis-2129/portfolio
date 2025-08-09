import React from 'react'
import ui from "../skills/ui.png"
import web from "../skills/websitet.png"
import './skill.css'


const Skill = () => {
  return (
    <section id="skills">
        <h1 className='skillHead'>What I do</h1>
        <p className="skillPara">I’m an MCA student passionate about full-stack development and UI/UX design.
            I have strong skills in HTML and Tailwind CSS, and I’m actively building modern,
            responsive web projects. I recently completed a UI/UX bootcamp by Design Phoenix and
            received full-stack training from JM Tech Institute. I enjoy creating clean and user-friendly
            designs using Canva, Photoshop, and Figma. I’m always exploring new tools and ideas, and I’m active
            on LinkedIn where I regularly share my work.
        </p>
        <div className="skills">
            <div className="SkillBar">
                <div>
                    <img src={ui} alt="ui" />
                </div>

                <div  className='skillInfo'>
                    <h1>UI/UX design</h1>
                    <p>This is a demo textt, you can write your own content here</p>
                </div>
            </div>

            <div className="SkillBar">
                <div>
                    <img src={web} alt="web" />
                </div>

                <div  className='skillInfo'>
                    <h1>Full Stack</h1>
                    <p>This is a demo text, you can write your own content here</p>
                </div>
            </div>

            
        </div>
    </section>
  )
}

export default Skill