import React, {useEffect} from "react";
import img from '../../../Logos-icons/ventana1.png'

import Aos from "aos";
import 'aos/dist/aos.css'

const Support = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return(
    <main className="support container section" id="Support">
      <section className="sectionContainer">
        <div className="titleDiv">
          <small>Travel Support</small>
          <h2>Plan your travel with confidence</h2>
          <p>Find help with booking and travel plans, see what to expert along the journey!</p>
        </div>

        <section className="infoDiv grid">
          <div className="textDiv grid">

            <div data-aos="fade-down" data-aos-duration="2500" className="singleInfo">
              <span className="number">01</span>
              <h4>Travel requirements for Qatar</h4>
              <p>Find help with booking and travel plans, see what to expert along the journey to your favorite destinations!</p>
            </div>

            <div data-aos="fade-down" data-aos-duration="3500" className="singleInfo">
              <span className="number colorOne">02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>Find help with booking and travel plans, see what to expert along the journey to your favorite destinations!</p>
            </div>

            <div data-aos="fade-down" data-aos-duration="3800" className="singleInfo">
              <span className="number colorTwo">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>Find help with booking and travel plans, see what to expert along the journey to your favorite destinations!</p>
            </div>

          </div>

          <div data-aos="fade-right" data-aos-duration="2500" className="imgDiv">
            <img src={img} alt="ventana" className="imgSupport"/>
          </div>
        </section>
      </section>
    </main>
  )
}
7

export {Support}