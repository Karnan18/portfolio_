import React from 'react'
import './Skillset.css'
import { skills } from '../../assets/Asset'

const Skillset = () => {
  return (
    <div>

<div className="heropage">

<h1 className="what">What i do</h1>

<p className="whati">i am from india and currently living in chennai.i am master in computer application and i will graduate in the Year  <br />
  2025.i am ui ux designer and currently working as a freelancr
</p>
{/* skills section */}
<div className="skillscontainer">

  {
    skills.map((i, index) => (
      <div key={index} className="p-box" >
        <div className="skillsBox">

          <div className="icons">
            <img className="skillicon" src={i.images} alt="" />
          </div>
          <div>{i.name}</div>
        </div>
      </div>
    ))
  }


</div>
</div>





        
        
        
    </div>
  )
}

export default Skillset