import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Let's talk!</h2>
        <p>
          Share your requirements and we'll get back to you with how we can
          help.
        </p>
      </div>

      <div class="grid-contact">
        <div class="contact-item1">
          <img width="350px" height="350px" src="/contact-us.png" alt="" />
        </div>
        <div class="contact-item2">
          <div>
            <div class="input-icons">
              <i class="fa fa-user icon"></i>
              <input class="input-field" type="text" placeholder="Name*" />
              <i class="fa fa-envelope icon"></i>
              <input class="input-field" type="text" placeholder="Email*" />
              <i class="fa fa-phone icon"></i>
              <input class="input-field" type="text" placeholder="Phone*" />
              <i class="fa fa-folder icon"></i>
              <input class="input-field" type="text" placeholder="Company*" />
            </div>
          </div>
        </div>
        <div class="contact-item3">
          <div>
            <div class="input-icons">
              <i class="fa fa-folder icon"></i>
              <input
                class="input-field"
                type="text"
                placeholder="Type of Project*"
              />
              <textarea placeholder="Breif description of your projects*"></textarea>
            </div>
            <div>
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
