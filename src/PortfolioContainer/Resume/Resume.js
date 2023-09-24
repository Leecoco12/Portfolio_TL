import React from 'react'
import './Resume.css'

export default function Resume() {
  return (
    <div className="About-container">
        <div className='header'>
            <h2>
                Resume
            </h2>
        </div>
        <div className='interline'>
            <h6 className='img-line'>
                ➖➖➖
            </h6>
        </div>
        
        <div className='wrapper-resume'>
            <div className='logo-skills'>
                <div className='styleback'>

                </div>
                <div className='logoss'>
                    <div className='button-resume'>
                            <a href="https://facebook.com">
                                <i className='fa fa-facebook-square'>  Education </i>
                            </a>

                    </div>
                    <div className='button-resume'>
                            <a href="https://google.com">
                                <i className='fa fa-google-plus-square'>  Work history </i>
                            </a>

                    </div>
                    <div className='button-resume'>
                            <a href="https://facebook.com">
                                <i className='fa fa-instagram'> My skills </i>
                            </a>

                    </div>
                    <div className='button-resume'>
                            <a href="https://facebook.com">
                                <i className='fa fa-youtube-square'>  My projects </i>
                            </a>

                    </div>
                    <div className='button-resume'>
                            <a href="https://facebook.com">
                                <i className='fa fa-twitter'>  Interest </i>
                            </a>

                    </div>
                </div>
        </div>
            <div className='resume-content'>
                <div className='resume-logo'>
                    
                </div>
                <div className='resume-skills'>

                </div>
           
            </div>
        </div>
    </div>
  )
}
