import React from "react";
import "./Services.css";

export const Services = () => {
  return (
    <div>
      <div className="services-container">
        <h1>Services</h1>
      </div>
      <div className="services-subtitle">
        <p>
          Enhance your business portfolio using our web, mobile and custom
          software development services. Our talented application developers are
          ready to create high quality and functional solutions.
        </p>
      </div>

      <div className="grid-services">
        <div className="service-item1">
          <div className="service-grid">
            <div className="item1-service">
              <img width="50px" height="50px" src="/service1.png" alt="" />
              <div>Cloud Native</div>
            </div>
            <div className="item1-service">
              <img width="50px" height="50px" src="/service2.png" alt="" />
              <div>Custom Software</div>
            </div>
            <div className="item1-service">
              <img width="50px" height="50px" src="/service3.png" alt="" />
              <div>Mobile Apps</div>
            </div>
            <div className="item1-service">
              <img width="50px" height="50px" src="/service4.png" alt="" />
              <div>Hire Developers</div>
            </div>
            <div className="item1-service">
              <img width="50px" height="50px" src="/service5.png" alt="" />
              <div>Software Maintainance</div>
            </div>
            <div className="item1-service">
              <img width="50px" height="50px" src="/service6.png" alt="" />
              <div>Quality Assurance</div>
            </div>
          </div>
        </div>
        <div class="service-item2">
          <img width="100%" src="/service.png" alt="" />
        </div>
      </div>
    </div>
  );
};
