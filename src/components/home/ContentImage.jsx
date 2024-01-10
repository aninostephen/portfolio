import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Image from 'react-bootstrap/Image';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const ContentImage = ({ heading, specfic }) => (
    <>
        <Jumbotron fluid id="mywork" className="bg-light m-0">
            <Container className="">
                <h2 className="display-4 pb-5 text-center">{heading}</h2>
                <Row>
                    {
                        specfic.map((content, index) => {
                            return (
                                <Col md={4} xs={6}>
                                    <a href={content.url} target="_blank">
                                        <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                                            <>
                                                <Image src={content.image} rounded/>
                                                <hr />
                                                <Card.Title as="h5">{content.name} </Card.Title>
                                            </>
                                        </Card>
                                    </a>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Container>
        </Jumbotron>
    </>
);

export default ContentImage;