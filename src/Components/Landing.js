import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../css/Landing.css';

export default function Landing() {

    return(
        <Container>
            <Row>
                <Col sm={12}>
                <div className='d-flex flex-column justify-content-center align-items-center position-relative vh-100'>
                <h1 className="text-white">ZenNation</h1>
                <div className="mt-3">
                <Button variant="info" className="mr-3">Register</Button>
                <Button variant="info">Login</Button>
                </div>
                </div>

                </Col>
            </Row>

        </Container>

    );
}