import React from 'react'
import './Contact.css'


export default function Contact() {
  return (
    <div className="About-container">
        <div className='header'>
            <h2>
                Contact Me
            </h2>
        </div>
        <div className='interline'>
            <h6 className='img-line'>
                ➖➖➖
            </h6>
        </div>
        <div className='wrapper-contact'>
            <div className='Text-label'>
                <h3>Get in touch</h3>
            </div>
            <div className='wrapper-contents'>
                <div className='text-container'>
                    <div className='logo-content'>
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
                    </div>
                    <div className='text-content'>
                        <div className='textcontact-label'>
                            <h5>Send Your Email Here</h5>
                        </div>
                        <div className='image-content'>
                            
                        </div>
                    </div>
                </div>
                <div className='email-content'>
                    <div className='email-message'>
                        <div className='text-label1'>
                            <h5>Name</h5>
                        </div>
                        <div className='text-input'>
                            <input name='Name'className='textInput'/>
                        </div>
                        <div className='text-label'>
                            <h5>Your Email</h5>
                        </div>
                        <div className='text-input'>
                            <input name='Name'className='textInput'/>
                        </div>
                        <div className='text-label2'>
                            <h5>Your message</h5>
                        </div>
                        <div className='text-input'>
                            <input name='Name'className='textInput'/>
                        </div>
                        
                        <button className='send-btn primary-btn'>Send 📩</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
