import React from 'react'
import './Hiring.css'
import { Images } from '../../assets/Asset'
const Hiring = () => {
  return (
    <div>
 <div className="hiring">

<div>
  <img className="sham" src={Images.sham} alt="" />
</div>
<div>

  <h1 className="Why">Why <span className="hire-me">Hire me?</span></h1>

  <p className="aboutme">I'm passionate about building impactful
    solutions,driven by curiosity,and committed
    to continuous learning. I bring a strong
    foundation in [Python,AI,Front end web development],hands-on
    experience through real projects like
    [Lawer boat],and the
    ability to adapt and solve real-world
    problems.My worl ethic,attention to detail,
    and desire to grow make me a reliable assets
    to ant team.I don't just work to complete
    tasks-I work to create value. </p>

  <button className="hiremebutton">Hire me</button>

</div>

</div>


    </div>
  )
}

export default Hiring