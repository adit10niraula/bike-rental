import React from 'react'
import UserContainer from '../../component/container/UserContainer'
import "./About.css"

const AboutUs = () => {
  return (
    <UserContainer>
    <div className="about-us-container">

    <section className="about-hero">
        <div className="about-hero-content">
        <h1>About Our Bike Rental</h1>
        <div className="section-image">
            <img src="img/rtr.png" alt="Our Mission" />
          </div>
        <p>
            Ride in style with our premium motorbike rental services. Whether you're exploring the city or embarking on a scenic journey, we’ve got you covered with top-quality motorbikes.
          </p>
        </div>
      

      <div className="contact-info">
          <h2>Contact Us</h2>
          <p>
            Have any questions or need assistance with booking? <p>Feel free to reach out to us.</p>
          </p>
          <p>Email: info@bikerental.com</p>
          <p>Phone: 9861586183</p>
          <p>Address: Balakhu-2, Bhaktapur</p>
        </div>
      </section>
    </div>
    </UserContainer>
  )
}

export default AboutUs
