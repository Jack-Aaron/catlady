import React from 'react';
import {
    Row,
    Col,
    Card,
    CardTitle,
    Button
} from 'reactstrap';
// import { NavLink as RRNavLink, Router } from 'react-router-dom';
import Container from '../Container';
import './style.css';
// import { render } from 'react-dom';

const AddBtn = (props) => {

    return (
        <div>
            <Container>
                <Row className='justify-content-center text-center'>
                    <Col>
                        <Card style={{
                            backgroundColor: '#E5989B',
                            maxWidth: '20%',
                            margin:'0 auto',
                            marginTop:'5em'
                        }} body>
                            <CardTitle>Begin managing the nutrition for another pet!</CardTitle>
                            <Button style={{ backgroundColor: '#B5838D' }}>Add Pet</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default AddBtn;

