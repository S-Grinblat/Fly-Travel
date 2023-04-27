import React from "react";

const Suscribe = () => {
  return(
    <main className="subscribe section">
      <section className="sectionContainer container">
        <h2>Subscribe Newsletters & get Latest News</h2>
        <div className="inputDiv flex">
          <input type="text" placeholder="Enter your Email address" />
          <button className="btn">Subscribe</button>
        </div>
      </section>
    </main>
  )
}

export {Suscribe}