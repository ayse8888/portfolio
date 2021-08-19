import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import ayse from "../../img/ayse.jpg";
import reactlogoo from "../../img/reactlogoo.png";
import jslogo from "../../img/jslogo.png";
import firebaselogo from "../../img/firebaselogo.png";
import sass from "../../img/sass.png";
import css from "../../img/css.webp";
import html from "../../img/html.jpg";
import "./About.css"

const About = () => {
  return (
    <Container>
      <Row className="about">
        <Col sm={12}>
          <img src={ayse} alt="image" className="myPicture"></img>
          <h1>Hi 🖐 I'm Ayşe</h1>
          <div className="textDiv">
            <p>
              I am a passionate Front End Developer who is open to learn new technologies, especially interested in front
              end languages and web programming. I'm working with the aim of improving my knowledge in these fields.
              I actually graduated from a non-related major and worked in Tourism sector over 5 years. But I had an
              enthusiasm and love for coding. The idea and the possibilities of creating high-quality, helpful, and
              inovative websites always excite me. So I decided to pursue web development as my dream. And I quited my job
              to follow my dream. My passion and hard working for coding increased every day and I got a scholarship from
              Turkey's one of the best coding schools "Kodluyoruz". After graduation, I got another schorlarship from
              one of the best coding school's "Re:Coded". Those are life changing experiences for me and are the places
              where I have learnt everything. Throughout the bootcamps, I have built projects with HTML, CSS, Bootstrap,
              Javascript, React.js and Firebase.
              My story is not ending here. There is a lot to learn and discover.
              And I will keep working as much as hard to achieve my goals.
            </p>
          </div>
        </Col>
        <Col sm={12}>
          <h1>Skills</h1>
          <div>
            <img src={reactlogoo} alt="logo" className="logo" />
            <img src={jslogo} alt="logo" className="logo" />
            <img src={firebaselogo} alt="logo" className="logo" />
          </div>
          <div>
            <img src={sass} alt="logo" className="logo" />
            <img src={css} alt="logo" className="logo" />
            <img src={html} alt="logo" className="logo" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default About
