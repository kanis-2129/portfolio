import React from 'react'
import "./ui.css"
import tech from "../assets/tech.jpg"
import poverty from "../assets/poverty.jpg"
import user from "../assets/user.png"
import music from "../assets/music.png"

const UIdesigns = () => {
    return (
        <div>
            <div id='designs'>
                <h1 className='frontend'>UI & UX Designs</h1>
                <div className='frontendProjects'>
                    <div className="boxes">
                        <img className='greenden' src={tech} alt="actodo" />
                        <div>
                            <h1 className='title'>TechForze </h1>
                            <p className='titlePoint'>Canva</p>

                        </div>
                    </div>

                    <div className="boxes">
                        <img className='greenden' src={poverty} alt="poverty" />
                        <div>
                            <h1 className='title'>Poverty</h1>
                            <p className='titlePoint'>Photoshop</p>

                        </div>
                    </div>
                    <div className="boxes">
                        <img className='greenden' src={user} alt="user" />
                        <div>
                            <h1 className='title'>User Persona</h1>
                            <p className='titlePoint'>Figma</p>

                        </div>
                    </div>

                    <div className="boxes">
                        <img className='greenden' src={music} alt="music" />
                        <div>
                            <h1 className='title'>Music Carts</h1>
                            <p className='titlePoint'>Figma</p>

                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}
export default UIdesigns