import React from "react";
import { Container, Image } from "react-bootstrap";

export const Footer = () => {
  return (
    <div className="footer">
      <footer className="py-5 my-10 bg-dark">
        <Container className="px-4">
          <Image src="edstem2.jpg" style={{ width: "10rem" }} />
          <p className="text-center text-white">
            Copyright &copy; Your Website 2022
          </p>
        </Container>
      </footer>
    </div>
  );
};
