import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './FrameMotion';
import axios from 'axios';
import '../css/Collection.css';


function Collection() {
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
        <motion.div className="row position-absolute w-100 Collections"
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {
            posts.map((post) => (
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="card h-100">
                        <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt="" /></a>
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="#">{post.title}</a>
                            </h4>
                            <p class="card-text">{post.entry}</p>
                        </div>
                    </div>
                </div>
                ))
            }

        </motion.div>
    )
}

export default Collection
