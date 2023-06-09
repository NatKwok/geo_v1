import React from "react";
import "../pages/style.css";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";

function Experience() {
  return (
    <motion.div
    className="resumebackground"
    initial={{ opacity: 0.7 }}
    animate={{ opacity: 1 }}
    transition={{ ease: "easeIn", duration: 1, x: { duration: 1 } }}
  >
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="resumeheader">Work Experience</h2>
            <h2 className="resumetext">Full Stack Developer Intern</h2>
            <h3>Idahys Partners, March 2023- Present</h3>
            <p>
              • Developing front end website architecture.
              <br />• Designing user interactions on web pages.
              <br />• Automatize human action using Rocketbot studio
              <br />• Ensuring responsiveness of applications.{" "}
            </p>

            <span></span>
            <br></br>

            <h2 className="resumetext">Junior Geomatician</h2>
            <h3>Microdrones Canada, October 2018-November 2021</h3>
            <p>
              • Execute and analyze results for LiDAR and mapping software under
              development
              <br />• Develop, document, and review test programs for
              mdSolutions team
              <br />• Recommend improvement, provide input, and regular feedback
              on software prototypes
              <br />• Lead client trainings on software and workflow, as well as
              teaching troubleshooting and diagnosis
            </p>

            <span></span>
            <br></br>

            <h2 className="resumetext">GIS Co-op Student</h2>
            <h3>Town of Oakville, September 2017-December 2017</h3>
            <p>
              • Contribute to the maintenance of GIS corporate mapping and
              associated geodatabases, datasets, and interactive websites
              <br />• Provide Customer support as it relates to various internal
              and external web mapping solutions
              <br />• Assist staff with data collection, trend analysis, and map
              preparation using ArcGIS Desktop software
              <br />• Creation of web map applications using ArcGIS Online and
              Geocortex
            </p>

            <span></span>
            <br></br>

            <h2 className="resumetext">Junior GIS Specialist</h2>
            <h3>
              Ontario Ministry of Agriculture, Food, and Rural Affairs, Jan
              2017-April 2017
            </h3>
            <p>
              • Assisting colleagues with GIS work for multiple projects,
              including but not limited to mapping boundaries of provincial
              counties,
              <br /> location of Ontarian fairgrounds, grain elevators,
              population density, water control pollution points (WCPCP)
              <br />• Updating constructed drainage and agricultural drainage
              tiles in rural Ontario using LIO editor
              <br />• Promoting the company in shows around Ontario (Green
              Living Show, Ontario Farming Show, Ontario Fruit and Vegetable
              Convention)
            </p>

            <span></span>

           
            <br></br>
            <br></br>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
}

export default Experience;
