import React from 'react'
import './Testimonial.css'
import Footer from '../Footer/Footer'
import profilphoto from '../../Images/fond.png'

export default function Testimonials() {
  return (
    <div className="About-container">
        <div className='header'>
            <h2>
                Testimonials
            </h2>
        </div>
        <div className='interline'>
            <h6 className='img-line'>
                ➖➖➖
            </h6>
        </div>
        
        <div className='wrapper-testimonial'>

            <div className='slide-testimonials'>
                <div className='message-box'>
                    <div className='profil-name'>
                        <img src={profilphoto} className="profilphoto" alt="profil" />
                        <h6>Ovy sy patsa</h6>
                    </div>
                    <div className='message-content'>
                        <p>
                            '' Le Lorem Ipsum est simplement du faux texte employé dans la composition 
                            et la mise en page avant impression. Le Lorem Ipsum est le faux texte 
                            standard de l'imprimerie depuis les années 1500, ''
                        </p>
                    </div>
                    
                </div>
                <div className='message-box'>
                    <div className='profil-name'>
                        <img src={profilphoto} className="profilphoto" alt="profil" />
                        <h6>Henakisoa ravitoto</h6>
                    </div>
                    <div className='message-content'>
                        <p>
                            '' Le Lorem Ipsum est simplement du faux texte employé dans la composition 
                            et la mise en page avant impression. Le Lorem Ipsum est le faux texte 
                            standard de l'imprimerie depuis les années 1500, ''
                        </p>
                    </div>
                </div>
                <div className='message-box'>
                    <div className='profil-name'>
                        <img src={profilphoto} className="profilphoto" alt="profil" />
                        <h6>Voanjobory lena</h6>
                    </div>
                    <div className='message-content'>
                        <p>
                            '' Le Lorem Ipsum est simplement du faux texte employé dans la composition 
                            et la mise en page avant impression. Le Lorem Ipsum est le faux texte 
                            standard de l'imprimerie depuis les années 1500, ''
                        </p>
                    </div>
                </div>
            </div>

            <div className='footer'>
                <Footer/>
            </div>
        </div>
    </div>
  )
}
