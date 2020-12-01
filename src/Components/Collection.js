import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './FrameMotion';
import axios from 'axios';
import '../css/Collection.css';
import Button from 'react-bootstrap/Button';
import UserProfile from '../Components/UserProfile';


function Collection() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
            .post(`http://localhost:4000/api/saved_gratitudes`, {
                id: UserProfile.getId()
            })
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
                        <a href="#"><img class="card-img-top" src="https://picsum.photos/id/1022/1024/517" alt="Inspirational" /></a>
                        <div class="card-body">
                            <h4 class="card-title">
                                {post.title}
                            </h4>
                            <p class="card-text">{post.entry}</p>
                            <Button variant="info" className="mr-3 mb-3">Remove</Button>
                        </div>
                    </div>
                </div>
                ))
            }

        </motion.div>
    )
}

export default Collection
