import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div>
      <div class="grid-about">
        <div class="about-item1">
          <img src="/studentbg.jpg" alt="" />
        </div>
        <div class="about-item2">

          <h2>Best School For Your Kids</h2>
          <p>
            Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
            dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
            justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
          </p>

          <img src="/about.jpg" alt=""/>
          <div>
          <button  className="learn-btn">Learn More</button>
          </div>
        </div>
      </div>


      <div class="grid-home1">
          <div class="home1-item1">
            <div className="item">Play Ground</div>
            <div>
              <p className="data">
                Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
              </p>
            </div>
          </div>
          <div class="home1-item1">
            <div className="item">Music and Dance</div>
            <div>
              <p className="data">
                Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
              </p>
            </div>
          </div>
          <div class="home1-item1">
            <div className="item">Arts and Crafts</div>
            <div>
              <p className="data">
                Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
              </p>
            </div>
          </div>

          <div class="home1-item1">
            <div className="item">Safe Transportation</div>
            <div>
              <p className="data">
                Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
              </p>
            </div>
          </div>

          <div class="home1-item1">
            <div className="item">Educational Tour</div>
            <div>
              <p className="data">
                Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
              </p>
            </div>
          </div>

          <div class="home1-item1">
            <div className="item">Healthy food</div>
            <div>
              <p className="data">
                Kasd labore kasd et dolor est rebum dolor ut, clita dolor vero
                lorem amet elitr vero...
              </p>
            </div>
          </div>
        </div>
    </div>
  );
};
