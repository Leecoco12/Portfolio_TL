import React from 'react'
/*import facebook from '../../Images/Facebook.png'
import google from '../../Images/Gmail.png'
import twitter from '../../Images/Twitter.png'
import github from '../../Images/Github.png'
import instagram from '../../Images/Instagram.png'*/
import "./Profil.css"
import Typical from 'react-typical'

export default function Profil() {
  return (
    <div className='profile-container'>
        <div className='head'>
                <header>
                    <h2 class="logo">Portfolio</h2>
                    <nav class="navigation">
                        <a href="hh">Home</a>
                        <a href="https://facebook.com">Services</a>
                        <a href="https://facebook.com">Contact</a>
                        <a href="https://facebook.com">About</a>
                        
                    </nav>
                </header>
            </div>
      <div className='profile-parent'>
        <div className='profile-details'>
            
            <div className='colz'>
                <div className='colz-icons'>
                    <a href="https://facebook.com">
                        <i className='fa fa-facebook-square'> </i>
                    </a>
                    <a href="https://google.com">
                        <i className='fa fa-google-plus-square'> </i>
                    </a>
                    <a href="https://facebook.com">
                        <i className='fa fa-instagram'> </i>
                    </a>
                    <a href="https://facebook.com">
                        <i className='fa fa-youtube-square'> </i>
                    </a>
                    <a href="https://facebook.com">
                        <i className='fa fa-twitter'> </i>
                    </a>
                </div>
                {/*<a href="https://facebook.com">
                        <img src={facebook} className="App-logo1" alt="facebook" />
                    </a>
                    <a href="https://google.com">
                        <img src={google} className="App-logo1" alt="google" />
                    </a>
                    <a href="https://twitter.com">
                        <img src={twitter} className="App-logo1" alt="twitter" />
                    </a>
                    <a href="https://instagram.com">
                        <img src={instagram} className="App-logo1" alt="instagram" />
                    </a>
                    <a href="https://github.com">
                        <img src={github} className="App-logo1" alt="github" />
  </a>*/}
                
            </div>
        
            <div className='profile-details-name'>
                <span className='primary-text'>
                    {" "}
                    Hello 👋, I'm <span className='highlighted-text'>Liantsoa</span>
                </span>
            </div>

            <div className='profile-details-role'>
                <span className='primary-text'>
                    {" "}
                    <h1>
                        {" "}
                        <Typical
                        loop = {Infinity}
                        steps = {[
                            "Fullstack Developer 💻",
                            10000,
                            "MERN Stack Dev 😎",
                            10000,
                            "React/React Native Dev 📱",
                            10000,
                            "Wordpress Developer 🛒",
                            10000,
                        ]}
                    />
                    </h1>
                    <span className='profile-role-tagline'>
                        Expert in realization of a web/mobile application with 'Front-end' and 'back-end' operation.
                    </span>
                </span>
            </div>
            <div className='profile-options'>
                <button className='btn primary-btn'>
                    {""}
                    Hire Me{" "}
                </button>
                <a href='pdf.pdf' download={'pdf.pdf'}>
                    <button className = 'btn highlighted-btn'>Get resume</button>
                </a>
            </div>
        </div>
        <div className='profile-picture'>
            <div className='profile-picture-background'>

            </div>
        </div>
      </div>
    </div>
  )
}
