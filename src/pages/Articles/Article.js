import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import sshart from "../../img/sshart.png";
import bootstraparc from "../../img/bootstraparc.png";
import solid from "../../img/solid.png";
import html from "../../img/html.png";
import "./Article.css"
import { FaMedium } from "react-icons/fa";

const Projects = () => {
  return (
    <Container>
      <Row className="projects">
        <h1>My Articles</h1>
        <Col sm={12}>
          <Row className="section">
            <Col sm={6}>
              <h2>SSH Nedir ?</h2>
              <p>
                This article explains what is SSH, how it works, how to create your SSH Key,
                public and private keys.
              </p>
              <a href="https://aysebasar.medium.com/ssh-nedir-dab38e299769" target="_blank">
                <FaMedium size={30}/>
              </a>
            </Col>
            <Col sm={6}>
              <img src={sshart} className="w-100 madlibs"/>
            </Col>
          </Row>
        </Col>
        <Col sm={12}>
          <Row className="section">
            <Col sm={6}>
              <h2>Bootstrap Nedir ?</h2>
              <p>
                This article explains what is Bootstrap, how to use it and why we use it.
              </p>
              <a href="https://aysebasar.medium.com/bootstrap-nedir-neden-ve-nas%C4%B1l-kullan%C4%B1l%C4%B1r-d982fa5aaca4" target="_blank">
                <FaMedium size={30}/>
              </a>
            </Col>
            <Col sm={6}>
              <img src={bootstraparc} className="w-100 madlibs"/>
            </Col>
          </Row>
        </Col>
        <Col sm={12}>
          <Row className="section">
            <Col sm={6}>
              <h2>Solid Prensipleri</h2>
              <p>
                This article explains what Solid Principles are and its importance, 
                explains the first rule "S" which is Single Responsibility Principle.
              </p>
              <a href="https://aysebasar.medium.com/solid-prensipleri-nelerdir-f3d57c4b3456" target="_blank">
                <FaMedium size={30}/>
              </a>
            </Col>
            <Col sm={6}>
              <img src={solid} className="w-100 madlibs"/>
            </Col>
          </Row>
        </Col>
        <Col sm={12}>
          <Row className="section">
            <Col sm={6}>
              <h2>HTML Meta Etiketi</h2>
              <p>
                This article explains what is HTML Meta tag is and its importance, 
                explains most important meta tag usages.
              </p>
              <a href="https://aysebasar.medium.com/html-meta-etiketi-a2282270b41" target="_blank">
                <FaMedium size={30}/>
              </a>
            </Col>
            <Col sm={6}>
              <img src={html} className="w-100 madlibs"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Projects
