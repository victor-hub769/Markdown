import React from 'react';
import Navbar from './Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const Bootstrap = () => {
  return (
    <>
      {' '}
      <Navbar />
      <Container>
        <h1> Bootstrap</h1>
        <div>
          {' '}
          <Row>
            <Col>1 of 3</Col>
            <Col>2 of 3</Col>
            <Col>3 of 3</Col>
          </Row>
          <Row>
            <Col>1 of 3</Col>
            <Col xs={4}>
              “Pull! Pull I say!” The slave driver shouts to the men, women and children that dragged behind his
              caravan. Spittle and the acid crack of his barbed whip accompanying his commands periodically, and pull
              they did. The slaves pulled and pulled naked and cold as they were, they pulled and pulled in fear of the
              whip, they pulled so as to keep themselves from it but it always fell. Without rhyme or reason, it always
              fell. One slave particularly was having a hard time. Every time he pulled, his feet slid in the grey slog
              beneath his feet and he fell, and with his falls, came the whip, then the acrid hiss of his flesh as the
              substance that covered the whip did its job and burned him. The barbs tearing his flesh away and the
              substance burning, tearing and burning, tearing and burning, this was the cycle and with it came his
              cries, with his cries came the whip again. The slave in particular was in a sorry state, a state that
              could barely be identified as a living person. He was old, actually ancient. The skin that covered his
              body once, pulling taut around the muscle and fat of youth, now sagged more akin to a cloak than a part of
              his body. His ribs easily visible, all his bones were visible through his sagging cloak. Dressed only in
              loin cloth and the tell-tale signs of starvation. His nails long and black filled to the brim with the
              filth of the mud below, his body covered in it from how many times he had fallen.
            </Col>
            <Col>3 of 3</Col>
          </Row>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col key={idx}>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural lead-in to additional content. This
                      content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};
export default Bootstrap;
