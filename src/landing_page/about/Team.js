
import React from "react";

function Team() {
  return (
    <div className="container p-5 mb-5">

      <h2 className="text-center fw-bold mb-5">
        CO-FOUNDER
      </h2>

      <div className="row justify-content-center align-items-start">

        
        <div className="col-md-4 text-center">
          <img
            src="/media/nithinKamath.jpg"
            alt="Nithin Kamath"
            className="img-fluid rounded-circle"
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />

          <h4 className="mt-3">Nithin Kamath</h4>
          <p className="text-muted">CEO</p>
        </div>

        
        <div
          className="col-md-6 mt-4 mt-md-0 p-4 border-top text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.1em" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in <strong>2010</strong>
            {" "}to overcome the hurdles he faced during his decade-long
            stint as a <strong>trader</strong>. Today, Zerodha has changed
            the landscape of the Indian broking <strong>industry</strong>.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

         <p>
           Connect on{" "}
           <a href="https://zerodha.com/about/">Homepage</a>
            {" / "}
           <a href="https://tradingqna.com/">TradingQnA</a>
            {" / "}
           <a href="https://twitter.com/">Twitter</a>
         </p>
        </div>

      </div>
    </div>
  );
}

export default Team;
