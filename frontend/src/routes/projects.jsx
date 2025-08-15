import React, { useState } from 'react'

import "./project.css"
import UIdesigns from './uidesigns'
import greenden from "../assets/greenden.png"
import udemy from "../assets/udemy.png"
import trip from "../assets/trip.png"
import meesho from "../assets/meesho.png"
import actodo from "../assets/acto.png"
import army from "../assets/Army.png"
import bulk from '../assets/bulk.jpg'
import blog from "../assets/blog.png"
const Projects = () => {
  const [showProject, setShowProject] = useState(false)

  const handleShowProject = () => {
    setShowProject(true)
  }
  return (
    <div>

      <div id='projects'>
        <h1 className='proHead'>My projects</h1>

        <div>
          <h3 className='frontend'>Frontend Projects</h3>
          <div className='frontendProjects'>
            <div className="boxes">
              <img className='greenden' src={greenden} alt="greenden" />
              <div>
                <h1 className='title'>Greenden </h1>
                <span className='titlePoint'>Responsive Frontend Website / Mini E-commerce  Greenden is designed to
                  promote plant sales with a clean, green aesthetic focused on nature and simplicity.Using
                  Tools <strong>Html and CSS</strong></span>

              </div>
            </div>

            <div className="boxes">
              <img className='greenden' src={udemy} alt="udemy" />
              <div>
                <h1 className='title'>Udemy Clone</h1>
                <span className='titlePoint'>Udemy offers online courses for learners around the world in
                  various domains like development, business, design, and more. Using tools <strong>HTML and CSS</strong></span>
              </div>
            </div>

            <div className="boxes">
              <img className='greenden' src={trip} alt="trip" />
              <div>
                <h1 className='title'>Trip Advisor</h1>
                <span className='titlePoint'>TripAdvisor helps travelers plan, book, and experience trips with the help of user-generated reviews and ratings.
                  Hotels, restaurants, flights, attractions, and tour packages — all in one place. Using tools <strong>HTML and CSS</strong>
                </span>

              </div>
            </div>

            <div className="boxes">
              <img className='greenden' src={meesho} alt="meesho" />
              <div>
                <h1 className='title'>Meesho Clone</h1>
                <span className='titlePoint'>Meesho is a popular e-commerce platform where anyone can start a business by reselling products via social media.
                  Categories include fashion, home essentials, kitchen items, beauty, electronics, and more at
                  wholesale prices. Using tools <strong>HTML and TailwindCSS</strong>
                </span>
              </div>

            </div>
          </div>


          {!showProject && (

            <button onClick={handleShowProject} className='Viewbtn'>View all</button>)
          }

          {
            showProject && (
              <div className='backend'>

                <h3 className='frontend'>MERN Stack</h3>


                <div className='frontendProjects'>
                  <div className="boxes">
                    <img className='greenden' src={actodo} alt="actodo" />
                    <div>
                      <h1 className='title'>Actodo</h1>
                      <span className='titlePoint'>A To-Do App allows users to add, edit, delete, and mark tasks as completed
                        — helping with daily task tracking. Using tools <strong>HTML,MERN stack</strong>
                      </span>
                    </div>
                  </div>

                  <div className="boxes">
                    <img className='greenden' src={army} alt="army" />
                    <div>

                      <h1 className='title'>Army book store</h1>
                      <span className='titlePoint'>A specially designed website for selling books related to the Indian Army.
                        Users can browse, search, add to cart, and buy books easily with a smooth shopping experience.
                        Using tools <strong>React,TailwindCSS,JS</strong>

                      </span>

                    </div>

                  </div>

                  <div className="boxes">
                    <img className='greenden' src={bulk} alt="actodo" />
                    <div>
                      <h1 className='title'>BulkMail</h1>
                      <span className='titlePoint'>Bulk Mail allows users to send a single email to many recipients
                        at once — commonly used for marketing, announcements, or notifications.
                        Using tools <strong>MERN stack, Nodemailer</strong>
                      </span>

                    </div>
                  </div>

                  <div className="boxes">
                    <img className='greenden' src={blog} alt="actodo" />
                    <div>
                      <h1 className='title'>Blog Portfolio</h1>
                      <span className='titlePoint'>Admin can add new blog articles with titles, images, and descriptions.
                        Blogs are stored using Firebase, MongoDB.Like, comment, or share buttons to improve
                        interactivity. Using tools <strong>MERN stack, Nodemailer</strong>
                      </span>
                    </div>

                  </div>
                </div>
                <UIdesigns></UIdesigns>
              </div>

            )
          }
        </div>
      </div>
    </div>


  )
}

export default Projects