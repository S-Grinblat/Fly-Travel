import React, {useEffect} from "react";
import {HiLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'

import Aos from "aos";
import 'aos/dist/aos.css'

const Search = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return(
    <main className="search container section" id="Search">

      <section data-aos="fade-up" data-aos-duration="2500" className="sectionContainer">

        <div className="btns flex">

          <div className="singleBtn" > 
            <span className="spanBtn">Economy</span>
          </div>

          <div className="singleBtn">
            <span className="spanBtn">Business Class</span>
          </div>

          <div className="singleBtn">
            <span className="spanBtn">First Class</span>
          </div>

        </div>

        <section data-aos="fade-up" data-aos-duration="2000" className="searchInputs flex">

          <div className="singleInput flex">
            <div className="iconDiv">
              <HiLocationMarker className="icon" />
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Where do you want to go?"></input>
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RiAccountPinCircleLine className="icon" />
            </div>
            <div className="texts">
              <h4>Travelers</h4>
              <input type="text" placeholder="Add guests"></input>
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="date" placeholder="Add Date"></input>
            </div>
          </div>

          <div className="singleInput flex">
            <div className="iconDiv">
              <RxCalendar className="icon" />
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="date" placeholder="Add Date"></input>
            </div>
          </div>

          <div>
            <input type="submit" className="btn btnBlock flex" value={`Search Flight`}></input>
          </div> 

        </section>

      </section>

    </main>
  )
}

export {Search}