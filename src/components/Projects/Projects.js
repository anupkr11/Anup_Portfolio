import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lock from "../../Assets/Projects/lock.png";
import movie from "../../Assets/Projects/movie.png";
import editor from "../../Assets/Projects/codeEditor.png";
import digital from "../../Assets/Projects/digital.png";
import exchangeRate from "../../Assets/Projects/exchangeRate.png";
import videoCall from "../../Assets/Projects/videoCall.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={videoCall}
              isBlog={false}
              title="ApnaPlatform"
              description="Interview preparation platforms where you can interact with people of the same domain and
              sharing your ideas with them and reducing the fear of public speaking and the Technologies used are ReactJs, React Bootstrap library, Google Firebase Auth, API
              "
              ghLink="https://github.com/anupkr11/ApnaPlatform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digital}
              isBlog={false}
              title="Asha Diary"
              description="It is about making VHIR register online for helping ASHA workers and	the Technologies used are Python (NumPy, Pandas), Machine Learning, Java, XML, MySQL"
              ghLink="https://github.com/anupkr11/AshaDiary"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Little-lemon"
              description="This project books a table by building a React-based web app for the Little Lemon restaurant and Technologies used HTML, CSS, JavaScript, Reactjs.
              -Technology: HTML, CSS, JavaScript, Reactjs"
              ghLink="https://github.com/anupkr11/Little-lemon"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lock}
              isBlog={false}
              title="Lock System"
              description="Dual lock system using face recognition for advanced security and the Technologies used are Python libraries numpy, opencv, pyttsx3."
              ghLink="https://github.com/anupkr11/LockSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exchangeRate}
              isBlog={false}
              title="Exchange Rate Calculator"
              description="Developed a website which helps to convert rate exchange of currencies and the Technologies HTML, CSS, JavaScript"
              ghLink="https://github.com/anupkr11/Exchange-rate-Calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Movie-seat-Booking"
              description="Display movie choices and seats in a theater to select from in order to purchase tickets and Save seats, movie and price to local storage so that UI is still populated on refresh and the Technologies HTML, CSS, JavaScript."
              ghLink="https://github.com/anupkr11/Movie-seat-Booking"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
