import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Movie_manage from "../../Assets/Projects/Movie_manage.png";


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
              imgPath={Movie_manage}
              isBlog={false}
              title="Movie website"
              description="website that use for serching Movie information just develop to practice my front-end skill "
              ghLink="https://github.com/XZACTA/Movie-Managing-Website.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
