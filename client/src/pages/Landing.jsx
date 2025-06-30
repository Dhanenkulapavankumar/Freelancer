import React, { useEffect } from 'react'
import '../styles/landing.css'
import {PiStudent} from 'react-icons/pi'
import {FaHandHoldingWater} from 'react-icons/fa'
import {MdHealthAndSafety} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

const Landing = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    if (localStorage.getItem("usertype") === 'freelancer'){
      navigate("/freelancer")
    } else if (localStorage.getItem("usertype") === 'client'){
      navigate("/client")
    } else if (localStorage.getItem("usertype") === 'admin'){
      navigate("/admin")
    }
  })


  return (
    <div className="landing-page">

        <div className="landing-hero">

            <div className='landing-nav'>
              <h3>Free lancer</h3>
              <button onClick={()=> navigate('/authenticate')} >Sign In</button>
            </div>

            <div className="landing-hero-text" style={{color:"black"}}>

                <h1>Empower Your Journey: Elevate Your Craft on Free lancer</h1>
                <p style={{color:"black"}}>Dive into a realm of endless possibilities with Free lancer. Unleash your creativity, skills, and passion as you embark on a freelancing journey like never before. Our platform is a thriving marketplace where innovation meets opportunity, connecting talented freelancers with businesses seeking excellence. </p>
                <button onClick={()=> navigate('/authenticate')}>Join Now</button>
            </div>

        </div>

    </div>
  )
}

export default Landing