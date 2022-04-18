import React from "react";
import "./Blog.css";

export const Blog = () => {
  return (
    <div>
      <div className="blog-container">
        <h1>Blogs</h1>
      </div>
      <div class="grid-blog">
        <div class="blog-item1">
          <img width="100%" src="/blog.jpg" alt="" />
          <h3>Edstem Meetup November 2021</h3>
          <p>
            It was a dream come true for Team Edstem. After a long spell of
            solitary workspace, the very prospect of camping together for four
            days was…
          </p>
        </div>
        <div class="blog-item2">
          <img width="100%" src="/blog1.jpg" alt="" />
          <h3>Warehouse App - Case Study</h3>
          <p>
            Edstem partnered with an on-demand warehouse startup in 2018 to
            develop a cloud-based solution that let customers tap into a network
            of…
          </p>
        </div>
        <div class="blog-item3">
          <img width="100%" src="/blog2.jpg" alt="" />
          <h3>Activiti to Camunda Migration – Case Study</h3>
          <p>
            Edstem engaged with one of their UK clients to migrate their
            production workflow systems from Alfresco Enterprise Activiti to an
            Open Source…
          </p>
        </div>
      </div>
    </div>
  );
};
