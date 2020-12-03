import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import { BsCloudUpload } from 'react-icons/bs';
import { FiSave } from 'react-icons/fi';
import axios from 'axios';

// These need to be imported in order for components to animate when switching between pages
import { motion } from 'framer-motion';
import { pageTransition, pageVariants, pageStyle } from './FrameMotion';
import UserProfile from "../Components/UserProfile";


const Entry = () => {
    const [contentEditor, setContentEditor] = useState("");
    const [headline, setHeadline] = useState("");
    const [show, setShow] = useState(false);

    //manage getting data from TinyMCE form
    const handleEditorChange = (content, editor) => {
        setContentEditor(content);
    }

    const handleHeadlineChange = (e) => {
        setHeadline(e.target.value)
    }


    //post entry to 'gratitude' table
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/gratitude`, {
            entry: contentEditor,
            title: headline,
            id: UserProfile.getId()
        })
        .then((res) => {
            
            if(res.status === 200) {
                handleShow();
            }

        })
        .catch(err => {
            console.log(err);
        })
        setContentEditor('');
        setHeadline('');

    }

    //manage modal
    const handleClose = () => {
        setShow(false);
    }
    const handleShow = () => {
        setShow(true);
    }

    return (
        <motion.div
            style={pageStyle}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            <div>
                <Form className="mb-2">
                    <Row>
                        <Col>
                            <Form.Control onChange={handleHeadlineChange} placeholder="Headline" />
                        </Col>
                    </Row>
                </Form>
            </div>

            <form onSubmit={handleSubmit}>
                <Editor
                    apiKey="3rc40kpnnv698neatb34c8fw2zfctnavcegd49sri6ix9s2d"
                    init={{
                        height: 500,
                        menubar: false,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar: 'undo redo | formatselect | ' +
                            'bold italic backcolor | alignleft aligncenter ' +
                            'alignright alignjustify | bullist numlist outdent indent | ' +
                            'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                        force_p_newlines : false,
                        forced_root_block : '',
                    }}
                    value={contentEditor}
                    onEditorChange={handleEditorChange}
                />
                <br />
                <Button className="mb-2" variant="outline-primary" type="submit"><FiSave size={24} /></Button>

                <Button className="mb-2 ml-3" variant="outline-secondary"><BsCloudUpload size={24} /></Button>
            </form>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>New Post Alert!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your Entry Has Been Saved</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </motion.div>
    );

}

export default Entry;