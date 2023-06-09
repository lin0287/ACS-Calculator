import React from 'react';
import CardSelector from "./CardSelection/CardSelector";
import "./HomePage.css"
import {CardSelectionProvider} from "./CardSelection/CardSelectionContext";
import {Container, Accordion, Col, Row} from "react-bootstrap";

function Home() {
  return (
    <Container>
      <CardSelectionProvider>
      <Row>
        <Col>
          <CardSelector/>
        </Col>
        <Col>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header><h6>Instructions</h6></Accordion.Header>
              <Accordion.Body>
                <ol>
                  <li>Select a <u>MAXIMUM</u> of 13 potential attack cards. (13 are selected by default)</li>
                  <li>Press calculate</li>
                  <li>Use the perfect attack to decimate the enemy</li>
                </ol>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><h6>Calculations</h6></Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
      </CardSelectionProvider>
    </Container>
  )
}

export default Home;
