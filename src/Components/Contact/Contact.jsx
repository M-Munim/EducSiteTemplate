import React, { useState } from 'react'
import './Contact.css'
import msgIcon from '../../assets/msg-icon.png'
import mailIcon from '../../assets/mail-icon.png'
import phoneIcon from '../../assets/phone-icon.png'
import locationIcon from '../../assets/location-icon.png'
import whiteArrow from '../../assets/white-arrow.png'

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d76f4d03-7a16-46ef-89fe-7abc1d2e5592");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact' id='Contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msgIcon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>

        <ul>
          <li> <img src={mailIcon} alt="" /> muhammadmunimoff330@gmail.com</li>
          <li> <img src={phoneIcon} alt="" /> +92 330 2021926</li>
          <li> <img src={locationIcon} alt="" /> B17 Multigardens, Islamabad, Pakistan</li>
        </ul>
      </div>

      <div className="contact-col">
        <form action="" onSubmit={onSubmit}>
          <label htmlFor="Name">Your Name</label>
          <input type="text" name='name' id='Name' placeholder='Enter Your Name' required />

          <label htmlFor="Phone">Phone Number</label>
          <input type="tel" name='phone' id='Phone' placeholder='Enter Your Phone Number' required />

          <label htmlFor="Message">Write Your Message Here</label>
          <textarea name="message" rows={6} required id="Message"></textarea>

          <button className="btn dark-btn" type='submit'>Submit <img src={whiteArrow} alt="" /> </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact