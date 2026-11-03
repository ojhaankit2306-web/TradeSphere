
import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      <div className="p-4" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="#">Track Tickets</a>
      </div>

      <div className="row p-5 m-3">

        {/* Left Section */}
        <div className="col-md-6 col-12 p-3">

          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            className="form-control mb-3"
            placeholder="Eg. how do I activate F&O"
          />

          <div className="d-flex flex-wrap gap-3">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>

        </div>

        {/* Right Section */}
        <div className="col-md-6 col-12 p-3">

          <h1 className="fs-3 mb-4">Featured</h1>

          <ol>
            <li className="mb-3">
              <a href="#">
                Current Takeovers and Delisting - January 2024
              </a>
            </li>

            <li className="mb-3">
              <a href="#">
                Latest Intraday leverages - MIS & CO
              </a>
            </li>
          </ol>

        </div>
      </div>
    </section>
  );
}

export default Hero;
