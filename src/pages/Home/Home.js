import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import Typed from 'react-typed';
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaMedium } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaRedoAlt } from "react-icons/fa";
import styled, { keyframes } from 'styled-components';
import FadeInRight from 'react-animations/lib/fade-in-right'
import "./Home.css"

export default function Home() {
  const FadeInRightAnimation = keyframes`${FadeInRight}`;
  const FadeInRightDiv = styled.div`
      animation:  2s ${FadeInRightAnimation};`;
  return (
    <FadeInRightDiv className="home">
      <Container>
        <Row className="homeRow">
          <Col>
            <div className="divContent">
              <span>
                <div>Eat<span style={{ color: "yellow" }}>( )</span></div>
                <FaUtensils style={{ marginLeft: ".3rem" }} size={25} />
              </span>
              <span>
                <div>Sleep<span style={{ color: "#E10003" }}>( )</span></div>
                <FaBed style={{ marginLeft: ".3rem" }} size={30} />
              </span>
              <span>
                <div>Code<span style={{ color: "#00E100" }}>( )</span></div>
                <FaCode style={{ marginLeft: ".3rem" }} size={30} />
              </span>
              <span>
                <div>Repeat<span style={{ color: "#0000E1" }}>( )</span></div>
                <FaRedoAlt style={{ marginLeft: ".3rem" }} size={25} />
              </span>
            </div>
            <h1 className="name">
              Ayşe Çimen Başar
            </h1>
            <h3>Front-end Developer from Istanbul, Turkey.</h3>
            <p>
              Flatiron School graduate who's aiming to build high-quality, helpful, inovative and beautiful websites.
            </p>
            <h3 className="experiencedIn">Experienced In
              <Typed
                className="languages"
                strings={['HTML and CSS', 'JavaScript', 'React ', 'Firebase']}
                typeSpeed={40}
                backSpeed={30}
                loop
              />
            </h3>
            <div>
              <a href="https://www.linkedin.com/in/aysecimenbasar/" target="_blank"><FaLinkedin className="mediaIcon" /></a>
              <a href="https://github.com/ayse8888" target="_blank"><FaGithubSquare className="mediaIcon" /></a>
              <a href="https://aysebasar.medium.com/" target="_blank"><FaMedium className="mediaIcon" /></a>
              <a href="https://stackoverflow.com/users/14567074/ayse8888" target="_blank"><FaStackOverflow className="mediaIcon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </FadeInRightDiv>
  );
}
