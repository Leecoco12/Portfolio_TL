import React from 'react'
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div className="About-container">
        <div className='header'>
            <h2>
                About Me
            </h2>
        </div>
        <div className='interline'>
            <h6 className='img-line'>
                ➖➖➖
            </h6>
        </div>
        <div className='wrapper'>
            <div className='about-picture'>
                <div className='about-picture-background'>

                </div>
            </div>
            <div className='about-content'>
                <p>
                Le Lorem Ipsum est simplement du faux texte employé dans la composition 
                et la mise en page avant impression. Le Lorem Ipsum est le faux texte 
                standard de l'imprimerie depuis les années 1500, quand un imprimeur 
                anonyme assembla ensemble des morceaux de texte pour réaliser un livre 
                spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, 
                mais s'est aussi adapté à la bureautique informatique, sans que son contenu 
                n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente 
                de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment,
                par son inclusion dans des applications de mise en page de texte, comme Aldus 
                PageMaker.
                </p>
                <div className='about-options'>
                <button className='aboutBtn primary-btn'>
                    {""}4
                    Hire Me{" "}
                </button>
                <a href='pdf.pdf' download={'pdf.pdf'}>
                    <button className = 'aboutBtn secondary-btn'>Get resume</button>
                </a>
            </div>
            </div>
        </div>
    </div>
  )
}
