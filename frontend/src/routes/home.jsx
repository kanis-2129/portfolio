
import Nav from '../components/nav'
import "./home.css"
import Aos from "aos"
import "aos/dist/aos.css"
import me from "../assets/asss.jpg"
import { Link } from 'react-router-dom'
import Skill from '../components/skills/skill'
import Contact from './contact'
import Projects from './projects'
import { useEffect } from 'react'

const Home = () => {
  useEffect(()=>{
    Aos.init()
  }) 
  return (
    <div className='portfolio'>
      <Nav />
      <section id='intro'>
        <div className='introContent' data-aos="fade-bottom">
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm <span className="introName">Kaneeswari</span> <br />
          Website Designer</span>
          <p className='introPara'>I'm skilled web designer  with experience in creating visually appealing and user friendly websites</p>
         <Link><button className='btn'>Hire me</button></Link>
        </div>
        
        <div>
          <img className='me' src={me} alt="me" />
        </div>
      </section>

      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home