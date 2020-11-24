import React, { useState, useEffect } from 'react';
import '../css/timeLine.css';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './FrameMotion';
import axios from 'axios';

function TimeLine() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:4000/api/gratitude`)
            .then(res => {
                console.log(res)
                setPosts(res.data);
            })
            .catch(error => {
                console.log(error);
            })
        // leaving the dependancy empty to only load once
    }, [])

    return (
        <motion.div className="container timeLine"
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {
            posts.map((post) => (
                <div className="timeline">
                    <div className="row no-gutters justify-content-end justify-content-md-around align-items-start  timeline-nodes">
                        <div className="col-10 col-md-5 order-3 order-md-1 timeline-content">
                            <h3 className=" text-light">{post.title}</h3>
                            <p>{post.entry}</p>
                        </div>
                        <div className="col-2 col-sm-1 px-md-3 order-2 timeline-image text-md-center">
                        </div>
                        <div className="col-10 col-md-5 order-1 order-md-3 py-3 timeline-date">
                            <time>{post.date_of_entry}</time>
                        </div>
                    </div>   
                </div>
            ))
            }
        </motion.div>
    )
}

export default TimeLine
