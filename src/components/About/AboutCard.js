import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Teeraphat Sirirak </span>
            from <span className="purple"> Kmutnb. Thailand</span>
            <br /> I am a final year student pursuing an Bachelor of Engineering Program in Electronics Engineering Technology
            <br /><span className="purple">(Computer)</span>
            <br/>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Learn new language of code
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen to music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Enjoy consistently learning new things"{" "}
          </p>
          <footer className="blockquote-footer">Teeraphat (OAK)</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
