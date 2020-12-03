import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Home.css';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GoNote } from 'react-icons/go';
import { BsImages } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import iconstash from '../images/icon8stash.png'

// These need to be imported in order for components to animate when switching between pages
import { motion } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './FrameMotion';
import UserProfile from '../Components/UserProfile';

function Home() {

    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');
    const [quoteImg, setQuoteImg] = useState('');

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  

    useEffect(() => {
  
        axios.get('https://quotes.rest/qod?language=en&category=inspire')
        .then(res => {
            setQuote(res.data.contents.quotes[0].quote);
            setAuthor(res.data.contents.quotes[0].author);
            setQuoteImg(res.data.contents.quotes[0].background);
            
        })
        .catch(err => {
            console.log(err);
        })
    
      }, []);

      const handleSave = () => {
          
        if(author && quote && UserProfile.getId()) {
                    
          axios.post(`/api/quotes`, {
            author: author,
            quote: quote,
            id: UserProfile.getId()
        })
          .then(res => {
              if(res.status == 200)
                  handleShow();
          })
          .catch(err => {
              console.log(err);
          }) 
        }
        else {
            alert("oops")
        }

      }

    return (
        <motion.div className="Home"
            // style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <Container>
                <Row>
                    {/* **** <-- Left Side -->  **** */}
                    {/* **** User Card/Profile **** */}
                    <Col md={3}>
                        <div className="card user-card row position-absolute w-100">
                            <div className="card-block">
                                <div className="user-image">
                                    <img src={iconstash} className="img-radius" alt="User-Profile" />
                                </div>
                                <h6 className="f-w-600 m-t-25 m-b-10"> {UserProfile.getName()} </h6>
                                <p className="text-muted">Austin, TX</p>
                                <hr />

                                <div className="bg-c-blue counter-block m-t-10 p-20">
                                    <div className="row">
                                        <div className="col-6">
                                            <BsImages size={24} />
                                            <p>14</p>
                                        </div>
                                        <div className="col-6">
                                            <GoNote size={24} />
                                            <p>12</p>
                                        </div>
                                    </div>
                                </div>
                                <p className="m-t-15 text-muted">Keep Groovin'</p>
                                <hr />
                                <div className="row justify-content-center user-social-link">
                                    <div className="col-auto"><a href="#!"><FaInstagram size={42} /></a></div>
                                    <div className="col-auto"><a href="#!"><FaTwitter size={42} /></a></div>
                                </div>
                            </div>
                        </div>

                    </Col>

                    {/* **** <-- Right Side -->  **** */}
                    <Col md={9}>
                        {/* SECTION FOR QUOTE */}
                        <Card>
                        <Card.Img src={quoteImg} variant="top" alt="Inspirational" />
                        <Card.Body>
                            <Card.Title>Inspirational Quote of the Day</Card.Title>
                            <blockquote className="blockquote mb-0">
                            <p>&ldquo;{quote}&rdquo;</p>
                            <footer className="blockquote-footer">{author}</footer>
                            </blockquote>
                            <Button className="mt-3" variant="info" onClick={handleSave}>Save</Button>
                        </Card.Body>
                        </Card>
                        
                    </Col>
                </Row>
                
                <Modal centered show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>New Quote Added</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Quote has been saved</Modal.Body>
                </Modal>

            </Container>
        </motion.div>
    )
}

export default Home
