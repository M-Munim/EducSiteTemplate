import React from 'react'
import './About.css'
import aboutImg from '../../assets/about.png'
import playIcon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={aboutImg} alt="" className='aboutImg' />
        <img src={playIcon} alt="" className='playIcon' />
      </div>

      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Embark on a transformative educational journey with our university's comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education.</p>

        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>

        <p>With a focus on innovation, hands-on learning, and personalized mentorship, our programs prepare aspiring educators to make a meaningful impact in classrooms, schools, and communities.</p>
      </div>
    </div>
  )
}

export default About