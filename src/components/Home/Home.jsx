import React, {useEffect} from "react";
import cielo from '../../../Logos-icons/cielo.webp'
import aeroplane from '../../../Logos-icons/plane.webp'

import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return(
    <section className="home flex container" id="Home">

      <div className="mainText">
        <h1 data-aos="fade-up" data-aos-duration="2500">Create Ever-lasting Memories With Us</h1>
      </div>

      <div className="homeImages flex">

        <picture className="videoDiv">
          <img src={cielo} className="video"></img>
        </picture>

        <img src={aeroplane} alt="Aeroplane" className="plane"/>
      </div>
    </section>
  )
}

export {Home}