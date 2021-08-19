import { Container, Row, Col, Button } from "react-bootstrap";
import React from "react";
import "./Contact.css"
import FadeInLeft from 'react-animations/lib/fade-in-left'
import styled, { keyframes } from 'styled-components';
import contact from "../../img/contact.png";

const Contact = () => {
  const FadeInLeftAnimation = keyframes`${FadeInLeft}`;
  const FadeInLeftDiv = styled.div`
      animation:  2s ${FadeInLeftAnimation};`;

  return (
    <FadeInLeftDiv>
      <Container >
        <Row className="contact">
          <Col>
            <h1>Get In Touch</h1>
            <h4 className="mt-3 mb-5">
              If you liked my projects , <br /> if you want to work with me on projects or <br />
              just want to talk about anything - <br />
              feel free to send me a mail 😊</h4>
            <a href="mailto: aysebasar91@gmail.com">
              <Button className="shadow-none">Send An E-mail</Button>
            </a>
          </Col>
        </Row>
      </Container>
      <img src={contact} className="contactImage" />
    </FadeInLeftDiv>
  );
}
export default Contact
