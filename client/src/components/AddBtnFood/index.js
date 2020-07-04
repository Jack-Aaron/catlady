import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from '../Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css';
import { useHistory, useLocation, HashRouter } from "react-router-dom";


const AddBtnFood = ({route, title}) => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/petfood"} };

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
                            <Card.Title>Add a new food!</Card.Title>

                            <Button className='AddBtn' block
                                variant='primary'
                                onClick={() => history.replace(from)}>
                                Add Food </Button>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default AddBtnFood;

