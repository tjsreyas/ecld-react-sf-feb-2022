import React from "react";
import "./Home.css";

export const Home = () => {
  return (
    <div>
      <div className="home-container">
        <h1>Edstem Technologies</h1>
      </div>
      <div className="subtitle">
        <p>
          Your dream development team with a group of young, highly skilled,
          passionate professionals, specialized in complex application
          development
        </p>
      </div>
      <div className="image-box"></div>

      <div class="grid-home">
        <div class="home-item1">
          <img width="100%" height="90%" src="/edstem1.jpg" alt="" />
        </div>
        <div class="home-item2">
          <div class="grid-subhome">
            <div class="sub-item1">
              <img width="150px" height="180px" src="./home1.png" alt="" />
            </div>
            <div class="sub-item2">
              <img width="150px" height="180px" src="./home2.png" alt="" />
            </div>
            <div class="sub-item3">
              <img width="150px" height="180px" src="./home3.png" alt="" />
            </div>
            <div class="sub-item4">
              <img width="150px" height="180px" src="./home4.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div class="grid-home1">
        <div class="subhome-item1">
          <h2>Transforming Ideas Digitally to Engineered Solutions.</h2>
          <p>
            From consulting, conceptualization to deployment and support – we
            are highly customer oriented company aimed at getting the best
            software done, in the most economical fashion, in the best suited
            cutting edge technology.
          </p>
        </div>
        <div class="subhome-item2">
          <img width="100%" height="100%" src="/home5.png" alt="" />
        </div>
      </div>
    </div>
  );
};
