import React from 'react'
import { Images } from '../../assets/Asset'
import './Hero.css' 

const Hero = () => {
  return (
    <div>
         <h3 className="hello">hello</h3>
              <h1 className="role">i'm <span className="name">Hariharan,</span></h1>
              <h1 className="role">front end developer</h1>
        
              <div className="hero">
                <div className="heroleft">
        
                  <p className="bold">&ldquo;</p>
                  <p>hariharan's exceptional front end design <br />
                    ensure our website's success <br />
                    heighly recommended <br />
                  </p>
        
                </div>
        
                <div className="herocenter">
                  <img className="hari" src={Images.hari} alt="" />
                </div>
        
                <div className="hero-right">
                  <div className="star">
                    <p className="star">&#9733;</p>
                    <p className="star">&#9733;</p>
                    <p className="star">&#9733;</p>
                    <p className="star">&#9733;</p>
                    <p className="star">&#9733;</p>
                  </div>
                  <h2>1 Year</h2>
                  <p>experience</p>
                </div>
        
              </div>
        
    </div>
  )
}

export default Hero
