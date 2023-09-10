import React, { useRef } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import ShowBar from "../../showSidebar";
import { Link } from "react-router-dom";

const CV = () => {
    const cvUpload = useRef();

    return <>
        <Form.Group >
            <Row>
                <Col>
                    <Form.Group className="cvBtn">
                        <Row>
                            <Col><Form.Label className="cvLable">Upload CV</Form.Label></Col>
                            <Col><Form.Control className="cvFile" type="file" required /></Col>
                        </Row>
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Form.Group className="cvContent">
                    You haven't posted any CVs yet
                </Form.Group>
            </Row>
        </Form.Group>
    </>
}

export default CV;