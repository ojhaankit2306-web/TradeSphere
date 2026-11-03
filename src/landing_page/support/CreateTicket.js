
import React from "react";

function CreateTicket() {
  const ticketCategories = [
    {
      title: "Account Opening",
      icon: "fa fa-plus-circle",
      links: [
        "Online Account Opening",
        "Offline Account Opening",
        "Company, Partnership and HUF Account",
        "NRI Account Opening",
        "Charges at Zerodha",
        "Zerodha IDFC FIRST Bank 3-in-1 Account",
        "Getting Started",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "fa fa-user",
      links: [
        "Login Credentials",
        "Account Modification",
        "Account Closure",
        "Profile Details",
        "Nomination",
        "Account Security",
      ],
    },
    {
      title: "Trading and Platforms",
      icon: "fa fa-line-chart",
      links: [
        "Trading FAQs",
        "Kite Web",
        "Kite App",
        "Orders and Trades",
        "Charts and Indicators",
        "Market Watch",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 mb-4">
          To create a ticket, select a relevant topic
        </h1>

        {ticketCategories.map((category, index) => (
          <div className="col-md-4 col-12 p-4 mt-2 mb-2" key={index}>
            <h4 className="mb-3">
              <i className={category.icon}></i>{" "}
              {category.title}
            </h4>

            {category.links.map((link, i) => (
              <div key={i}>
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    lineHeight: "2.5",
                  }}
                >
                  {link}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateTicket;
