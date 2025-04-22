import "./App.css"
import React from 'react'
import { Images, skills } from "./assets/Asset"
import Navbar from "./Component/Navigation/Navbar"
import Hero from "./Component/Hero/Hero"
import Skillset from "./Component/Skillset/Skillset"
import Hiring from "./Component/Hiring/Hiring"
import "./Component/Hero/Hero.css"
import "./Component/Hiring/Hiring.css"
import "./Component/Navigation/Navbar.css"
import "./Component/Skillset/Skillset.css"


const App = () => {
  return (




    <div classNameName='screen'>

      <Navbar />
      <Hero />
      <Skillset />
      <Hiring  />
      {/* footer */}
  
<footer className="site-footer">
  <div className="footer-container">
    
    <div className="footer-section about">
      <h4>About Me</h4>
      <p>I'm a passionate AI developer creating intuitive and impactful web experiences. Let's build something great together.</p>
    </div>

    
    <div className="footer-section links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
    </div>

    
    <div className="footer-section contact">
      <h4>Contact</h4>
      <p>Email: <a href="mailto:youremail@example.com">samkaran82@gmail.com</a></p>
      <p>Phone: <a href="tel:+1234567890">+6385664626</a></p>
    </div>

    
    <div className="footer-section social">
      <h4>Connect</h4>
      <a href="https://linkedin.com/in/hariharan ayyanar-5132a934a" target="_blank" aria-label="LinkedIn">
        <img src={Images.linkedinicon} alt="LinkedIn" />
      </a>
      <a href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
        <img src={Images.githubicon} alt="GitHub" />
      </a>
      <a href="https://twitter.com/yourhandle" target="_blank" aria-label="Twitter">
        <img src={Images.twiterIcon} alt="Twitter" />
      </a>
    </div>
  </div>

  
  <div className="footer-bottom">
    <p>&copy; 2025 HARIHARAN. All Rights Reserved.</p>
  </div>
</footer>



      

     


    </div >
  )
}

export default App

