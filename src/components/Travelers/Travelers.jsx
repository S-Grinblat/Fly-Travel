import React, {useEffect} from "react";
import BAS from '../../../Logos-icons/Obelisco.jpg'
import ITA from '../../../Logos-icons/Italia.webp'
import SUZ from '../../../Logos-icons/Suiza.webp'
import traveler1 from '../../../Logos-icons/messi (1).webp'
import traveler2 from '../../../Logos-icons/vero.webp'
import traveler3 from '../../../Logos-icons/santi.webp'

import Aos from "aos";
import 'aos/dist/aos.css'

const travelers = [{
  id: 1,
  destinationImage: BAS,
  travelerImage: traveler1,
  travelerName: 'Leo Messi',
  socialLink: '@leomessi',
  },

  {
    id: 2,
    destinationImage: ITA,
    travelerImage: traveler2,
    travelerName: 'Veronica Grinblat',
    socialLink: '@VeroGrin',
  },

  {
    id: 3,
    destinationImage: SUZ,
    travelerImage: traveler3,
    travelerName: 'Santiago Silva',
    socialLink: '@GrinSan',
  }
]
const Travelers = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return(
    <main className="travelers container section" id="Destination">
      <section className="sectionContainer">
        <h2>Top travelers of this month!</h2>

        <div className="travelersContainer grid">

          {
            travelers.map(({id, destinationImage, travelerImage, travelerName, socialLink})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="2500" key={id} className="singleTraveler">
                  <img src={destinationImage} loading="lazy" alt="Buenos Aires" className="destinationImage" />

                  <div className="travelerDetails">
                    <picture className="travelerPicture">
                      <img src={travelerImage} alt="messi" className="travelerImage"/>
                    </picture>
                    <div className="travelerName">
                      <span> {travelerName} </span>
                      <p> {socialLink} </p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </main>
  )
}

export {Travelers}