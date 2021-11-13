import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Simulation: React.FC = () => {
  return (
    <>
      <Container>
        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>BUY TSLA</Accordion.Header>
            <Accordion.Body>Close: 1020.32 Profit: 2.15%</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>BUY AAPL</Accordion.Header>
            <Accordion.Body>Close: 155.62 Profit: 3.25%</Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
};

export default Simulation;
