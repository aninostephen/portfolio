import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

const Ehistory = ({ heading, specfic }) => {
    console.log(specfic.length)
    return (
        <Jumbotron fluid id="history" className="bg-light m-0">
          <Container className="">
            <h2 className="display-4 pb-5 text-center">{heading}</h2>
            <Row>
                {specfic.map((history, index) => {
                        return (
                            <Col md={6}>
                                <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                                    <Card.Body>
                                        <Card.Title as="h5">Company: {history.companyName} </Card.Title>
                                        <div>{history.startDate} - {history.endDate}</div>
                                        <p></p>
                                        <Card.Text><b>Address:</b> {history.address}</Card.Text>
                                        <Card.Text><b>Position:</b> {history.position}</Card.Text>
                                        <Card.Text><b>Description:</b> {history.description}</Card.Text>
                                        <hr />
                                        <Card.Text><b>What I Do:</b></Card.Text>
                                        <ul>
                                            {history.whatIDo.map(item => <li key={item}>{item}</li>)}
                                        </ul>
                                        <hr />
                                        {
                                            history.mostWork.length > 0 && (
                                                <>
                                                    <Card.Text><b>Most of my work:</b></Card.Text>
                                                    <ul>
                                                        {history.mostWork.map(item => <li key={item}>{item}</li>)}
                                                    </ul>
                                                </>
                                            )
                                        }
                                    </Card.Body>
                                </Card>
                            </Col>
                        );
                    })
                }
                
            </Row>
          </Container>
        </Jumbotron>
    );
};

export default Ehistory;