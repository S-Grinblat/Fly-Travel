import React from "react";
import img from '../../../Logos-icons/tripulant.webp';
const Lounge = () => {
  return(
    <main className="lounge container section" id="Lounge">
      <section className="sectionContainer grid">
        <picture className="imgDiv">
          <img src={img} alt="tripulant" className="imgLounge"/>
        </picture>

        <div className="textDiv">
          <h2>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">

            <div className="singleGrid">
              <span className="gridTitle">Help through the airport</span>
              <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destination</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Priority Boarding</span>
              <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destination</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Care on the flight</span>
              <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destination</p>
            </div>

            <div className="singleGrid">
              <span className="gridTitle">Chauffeur-drive service</span>
              <p>You can also call airlines from your phone and book a flight ticket to one of your favorite destination</p>
            </div>

          </div>

        </div>

      </section>
    </main>
  )
}

export {Lounge}