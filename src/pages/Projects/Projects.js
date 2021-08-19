import React from "react";
import { Container, Row, Col } from 'react-bootstrap'
import madlibs from "../../img/madlibs.png";
import movieproject from "../../img/movieproject.png";
import portfolio from "../../img/portfolio.png";
import ds from "../../img/ds.png";
import board from "../../img/board.png";
import "./Projects.css"
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

const Projects = () => {
  return (
    <Container>
      <Row className="projects">
        <h1>My Projects</h1>
        <Col sm={12}>
          <Row className="section">
            <Col sm={6}>
              <h2>MadLibs</h2>
              <p>
                The purpose of the website is to play mad libs. Madlibs is a universal game and more information
                about it can be found in google. Type your words and see them reflect alive. Complete the 
                story with your own words 🌞 
              </p>
              <p>
                We used HTML, CSS and Javascript on this project.
              </p>
              <a href="https://github.com/ayse8888/MadLibs" target="_blank">
                <FaGithub size={30}/>
              </a>
              <a href="https://madlibs-game-project.netlify.app/" target="_blank">
                <GoLinkExternal size={35}/>
              </a>
            </Col>
            <Col sm={6}>
              <img src={madlibs} className="w-100 madlibs"/>
            </Col>
          </Row>
        </Col>
        <Col sm={12}>
          <Row className="section">
            <Col sm={6}>
              <h2>Movie Project</h2>
              <p>
                This project is inspired by IMDb website which you can search for movies, 
                actors and see popular movies, similar movies etc. You can check movie details,
                actor details and so on. In this project, my partner and 
                I've used object-oriented programming and MovieDb API to fetch the movie 
                data. 🎬
              </p>
              <p>
                We used JavaScript, HTML, Bootstrap and CSS for styling.
              </p>
              <a href="https://github.com/ayse8888/OOP-Movie-Project" target="_blank">
                <FaGithub size={30}/>
              </a>
              <a href="https://oop-movie-project-js.netlify.app/" target="_blank">
                <GoLinkExternal size={35}/>
              </a>
            </Col>
            <Col sm={6}>
              <img src={movieproject} className="w-100 madlibs"/>
            </Col>
          </Row>
        </Col>
        <Col sm={12}>
          <Row className="section">
            <Col sm={6}>
              <h2>Board Project</h2>
              <p>
                This project is inspired by Trello which is a task manager.
                In this project we built a music app where you can add songs to
                your list, edit them and delete them. You can create your own song
                list and add songs in it. You can add them to 
                your favorites and remove. 🎵
              </p>
              <p>
                We used React js and Firebase (for database) for this project.
                And we used Bootstrap and CSS for styling.
              </p>
              <a href="https://github.com/ayse8888/Board-Project" target="_blank">
                <FaGithub size={30}/>
              </a>
              <a href="https://lovelysongs.netlify.app/" target="_blank">
                <GoLinkExternal size={35}/>
              </a>
            </Col>
            <Col sm={6}>
              <img src={board} className="w-100 madlibs"/>
            </Col>
          </Row>
        </Col>
        <Col sm={12}>
          <Row className="section">
            <Col sm={6}>
              <h2>Portfolio</h2>
              <p>
                The purpose of this website is to tell my story, my education, my skills and projects 
                that I have made so far. 
              </p>
              <p>
                I used ReactJs, Bootstrap and CSS.
              </p>
              <a href="https://github.com/ayse8888/portfolio" target="_blank">
                <FaGithub size={30}/>
              </a>
              <a href="https://my-portfolio-project-reactjs.netlify.app/" target="_blank">
                <GoLinkExternal size={35}/>
              </a>
            </Col>
            <Col sm={6}>
              <img src={portfolio} className="w-100 madlibs"/>
            </Col>
          </Row>
        </Col>
        <Col sm={12}>
          <Row className="section">
            <Col sm={6}>
              <h2>Developer Store E-Commerce WebSite</h2>
              <p>
                The purpose of this website was to create an e-commerce website upon Developer Items
                such as clothes, mugs, hoodies etc. Since there was no e-commerce companies wich sell
                such as items in Turkey, we developed an idea to create this website where you can search
                items, create your user profile, add them to your cart and remove. You can add them to 
                your favorite list. And You can sort by the catagory. Everything will be stored in 
                local storage. 👘
              </p>
              <p>
                We used ReactJs, Commerce Js DB, ContextApi, Firebase for Login authentication, Bootstrap and CSS.
              </p>
              <a href="https://github.com/ayse8888/react-graduation-ecommerce-project" target="_blank">
                <FaGithub size={30}/>
              </a>
              <a href="https://developer-store-e-commerce.netlify.app/" target="_blank">
                <GoLinkExternal size={35}/>
              </a>
            </Col>
            <Col sm={6}>
              <img src={ds} className="w-100 madlibs"/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
export default Projects
