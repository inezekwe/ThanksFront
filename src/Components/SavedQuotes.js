import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

// These need to be imported in order for components to animate when switching between pages
import { motion } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './FrameMotion';
import UserProfile from './UserProfile';

function SavedQuotes() {
    const [quotes, setQuotes] = useState([]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    useEffect(() => {
  
        axios.post('http://localhost:4000/api/saved_quotes', {
            id: UserProfile.getId()
        })
        .then(res => {
            console.log(res);
            setQuotes(res.data.results.concat());
            
        })
        .catch(err => {
            console.log(err);
        })
    
      }, []);

    const removeQuote = (i) => {
        axios.post('http://localhost:4000/api/remove_quote', {
            id: i,
            userid: UserProfile.getId()
        })
            .then(res => {
                console.log(res);
                if(res.status == 200) {
                    handleShow();
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

    const displayQuotes = quotes.map(saved => {
        if(!saved.isdeleted) {
            return                             <Col key={saved.id}lg={4} md={6}>
            <Card>
                <Card.Img src='https://picsum.photos/id/1018/1024/517' variant="top" alt="Inspirational" />
                    <Card.Body>
                        <Card.Title>{saved.date_of_entry}</Card.Title>
                        <blockquote className="blockquote mb-0">
                        <p>&ldquo;{saved.quote}&rdquo;</p>
                        <footer className="blockquote-footer">{saved.author}</footer>
                        </blockquote>
                        <Button className="mt-3"  variant="info">Remove</Button>
                    </Card.Body>
            </Card>
            </Col>; 
        }
    })
    return (
        <motion.div className="SavedQuotes"
        // style={pageStyle}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        >

        <Container>
            <Row>
                {displayQuotes}
            {/*quotes.map(saved => (
                            <Col lg={4} md={6}>
                            <Card key={saved.id}>
                                <Card.Img src='https://picsum.photos/id/1018/1024/517' variant="top" alt="Inspirational" />
                                    <Card.Body>
                                        <Card.Title>{saved.date_of_entry}</Card.Title>
                                        <blockquote className="blockquote mb-0">
                                        <p>&ldquo;{saved.quote}&rdquo;</p>
                                        <footer className="blockquote-footer">{saved.author}</footer>
                                        </blockquote>
                                        <Button className="mt-3" variant="info">Remove</Button>
                                    </Card.Body>
                            </Card>
                            </Col>
            )) */}

            </Row>

            <Modal centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Quote Removed</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Quote has been removed</Modal.Body>
                </Modal>
            
        </Container>
        </motion.div>
    )
}

export default SavedQuotes
