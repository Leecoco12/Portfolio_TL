import React from 'react'
import Footer from '../Footer/Footer'
import '../Home/Home.css'
import Testimonials from './Testimonial'

export default function Home() {
  return (
    <div className='home-container'>
      <Testimonials/>
      <Footer/>
    </div>
  )
}
