import React from 'react';
import '../css/Home.css';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { GoNote } from 'react-icons/go';
import { BsImages } from 'react-icons/bs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import iconstash from '../images/icon8stash.png'

// These need to be imported in order for components to animate when switching between pages
import { motion } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './FrameMotion';

function Home() {
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
                    <Col lg="3">
                        <div class="card user-card row position-absolute w-100">
                            <div class="card-block">
                                <div class="user-image">
                                    <img src={iconstash} class="img-radius" alt="User-Profile-Image" />
                                </div>
                                <h6 class="f-w-600 m-t-25 m-b-10">A Person</h6>
                                <p class="text-muted">Austin, TX</p>
                                <hr />

                                <div class="bg-c-blue counter-block m-t-10 p-20">
                                    <div class="row">
                                        <div class="col-6">
                                            <BsImages size={24} />
                                            <p>14</p>
                                        </div>
                                        <div class="col-6">
                                            <GoNote size={24} />
                                            <p>12</p>
                                        </div>
                                    </div>
                                </div>
                                <p class="m-t-15 text-muted">Keep Groovin'</p>
                                <hr />
                                <div class="row justify-content-center user-social-link">
                                    <div class="col-auto"><a href="#!"><FaInstagram size={42} /></a></div>
                                    <div class="col-auto"><a href="#!"><FaTwitter size={42} /></a></div>
                                </div>
                            </div>
                        </div>

                    </Col>

                    {/* **** <-- Right Side -->  **** */}
                    <Col lg="9">
                        {/* SECTION FOR QUOTE */}
                       
                        
                    </Col>
                </Row>
            </Container>
        </motion.div>
    )
}

export default Home
