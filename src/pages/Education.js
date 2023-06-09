import React from "react";
import "../pages/style.css";
import { Container, Row } from "react-bootstrap";
import uw from "../media/waterloo_logo.png";
import jac from "../media/jac_logo.png";
import { motion } from "framer-motion";

function Education() {
  return (
    <motion.div 
    className="resumebackground"
    initial={{ opacity: 0.7 }}
    animate={{ opacity: 1 }}
    transition={{ ease: "easeIn", duration: 1, x: { duration: 1 } }}
    >
      <Container>
        <Row>
          <div className="resumebox">
                      <h2 className="resumeheader">Education</h2>
          <h2 className="resumetext">
            Bachelor of Environmental Studies 2013-2018
          </h2>
          <img src={uw} className="uwlogo" alt="uslogo"></img>
          <h3>Specialization in Geomatics</h3>
          <h3>University of Waterloo, Ontario, Canada</h3>

          <span></span>
          <br></br>
          <br></br>

          <h2 className="resumetext">
            Attestation D’etudes Collegiales (AEC) 2022-2023
          </h2>
          <img src={jac} className="jaclogo" alt="jaclogo"></img>
          <h3>Full Stack Developer Program</h3>
          <h3>John Abbott College, Quebec, Canada</h3>

          <span></span>
          <br></br>
          <br></br>
          </div>


          
        </Row>
      </Container>
    </motion.div>
  );
}

export default Education;
