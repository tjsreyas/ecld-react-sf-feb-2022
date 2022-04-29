import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

export const About = () => {
  return (
    <div>
      <Container className="p-5 text-center">
        <h2>Company</h2>
        <p>
          A bunch of technically enthusiastic, widely experience, logically
          focused group of professionals –that pretty much summarizes team
          Edstem. We are ever re-inventing ourselves in terms of technology, and
          eager to help out customers in achieving the digital transformation
          which they wish for. All in all, we strive ourselves to be the best
          technological partner our clients wish for.
        </p>
      </Container>
      <Container style={{ marginTop: "3rem" }}>
        <Row style={{ backgroundColor: "#e9f9ff", borderRadius: "50px" }}>
          <Col style={{ marginTop: "15rem", marginLeft: "2rem" }}>
            <Image style={{ width: "25rem" }} src="edstem3.jpg" />
          </Col>
          <Col>
            <div className="m-5">
              <h2>The Beginning and the Growth</h2>
              <p style={{ textAlign: "justify" }}>
                Edstem was founded by K K Ashraf and Jerrish Varghese in 2012
                primarily for developing products in education domain. Both of
                them were quite experienced in their respective domains which
                they wanted to utilize for new product development for schools.
                There were 3 developers initially who were working from home for
                a school management product and it got launched in one pilot
                school by 2013 September. The initial experience with schools in
                Middle East, research and study, and that hub of expertise
                transformed into a small consulting group and led us to create
                some of our first school management softwares for Later, we
                shifted our focus to both product as well as custom software
                development. In 2015 the team size crossed 10 members and we
                were able to launch new products in to the market for schools.
                The first custom software development opportunity we received
                was from Dubai SME, to work with Dubai Entrepreneurship Academy
                for the custom software development of their new portal. The
                project had its own challenge including Arabic language support
                which was something new to the development team. It was widely
                appreciated and gave us the confidence to do more software
                development projects, across the globe. With technology more
                important than ever, in 2018 we setup a new Development Center
                with an ever growing team size of more than 50 members currently
                working on new trending technologies in all aspects of software
                development. All our core products are revamped, and our
                clientele has expanded from Middle East over to Europe and US –
                some of them have been our technology partner for years. We know
                it’s just the beginning, and as we believe – Sky is our limit,
                and technology is limitless!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="mb-5" style={{ marginTop: "5rem" }}>
        <Row>
          <Col
            style={{
              backgroundColor: "rgb(47, 164, 152)",
              color: "white",
              borderRadius: "50px",
            }}
          >
            <div className="mt-5 m-5">
              <h4>
                We stock the entire range of skill sets for end to end software
                delivery
              </h4>
              <ul>
                <li className="py-2">Web and Mobile FullStack developers</li>
                <li className="py-2">Software Architects</li>
                <li className="py-2">Software Consultants</li>
                <li className="py-2">Data Analysts</li>
                <li className="py-2">UX Designers</li>
                <li className="py-2">DevOps Engineers</li>
                <li className="py-2">QA Specialists</li>
              </ul>
            </div>
          </Col>
          <Col md="6">
            <div className="m-5">
              <h2>Our Skillset</h2>
              <p style={{ textAlign: "justify" }}>
                We have a team, with multi skill set catering to wide range of
                technical expertise for projects across the globe. Our team
                follows agile methodologies and practices in all our projects,
                with high customer involvement, and iterative delivery cycles.
                Our DevOps professionals are well versed with a variety of cloud
                solutions, and almost all the customer projects and processes
                are automated using continuous integration pipelines. We also
                have technical architects and consultants, who are widely
                recognized across the globe for their exemplary technical
                knowledge and project management skills.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
