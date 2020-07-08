import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from '../Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css';
import { useHistory } from "react-router-dom";


const ViewFood = () => {
    let history = useHistory();

    return (
        <div>
            <hr />
            <Container>
                <Row className='justify-content-center text-center'>
                    <Col>
                        <Card style={{
                            backgroundColor: '#E5989B',
                            width: '21em',
                            margin: '0 auto',
                            marginTop: '3em'
                        }} body>
                            <Card.Title>See Food Information!</Card.Title>

                            <Button className='AddBtn' block
                                className="btn btn-secondary"
                                onClick={() => history.push("/petfoods")}>
                                View Foods List </Button>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default ViewFood;

