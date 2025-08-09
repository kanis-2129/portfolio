import React from 'react'
import "../components/navStyle.css"
import { Link } from 'react-scroll'

const Nav = () => {
    return (
        <div className='header'>

            <h1 className='port'>Portfolio</h1>
            <div className="navMenu">
                <Link activeClass='active' to='home' spy={true} smooth={true} offset={-50} duration={500} className='navMenuList'>Home</Link>
                
                <Link  activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='navMenuList' >About</Link>
                <Link  activeClass='active' to='projects' spy={true} smooth={true} offset={-50} duration={500} className='navMenuList'>Projects</Link>
            </div>

            <Link activeClass='active'  to="contact" spy={true} smooth={true} offset={-100} duration={500} className='contact'>Contact me</Link>


        </div>
    )
}

export default Nav