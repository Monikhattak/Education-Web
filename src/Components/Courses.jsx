import React from "react";
import "./Courses.css";
import { Data } from "../Data";
export default function Courses() {
  const uniqueCategories = Array.from(
    new Set(Data.map((datum) => datum.category))
  );

  console.log("====================================");
  console.log(uniqueCategories);
  console.log("====================================");
  return (
    <div className="product-container">
      <div className="left-sidebar">
        <h2>Categories</h2>
        <ul>
          {uniqueCategories.map((datum) => (
            <li className="category" key={datum}>
              {datum}
            </li>
          ))}
        </ul>
        <h2> Location</h2>
        {Data.map((area) => (
          <li className="category" key={area.location}>
            {area.location}
          </li>
        ))}
      </div>
      <div>
        <section>
          <div className="container">
            {Data.map((card) => (
              <div className="cards" key={Data.index}>
                <div className="show">
                  <h3>
                    <img src={card.image} alt="" />
                    <p>{card.title}</p>
                    <p className="categorys">{Data.category}</p>
                    <p>{card.location}</p>
                    <p>{card.description}</p>
                    <button className="btn7"> Details </button>
                  </h3>
                  2
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
