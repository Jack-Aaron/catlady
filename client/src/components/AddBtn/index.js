import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from '../Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './style.css';

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
                            <Card.Title>Begin managing the nutrition for another pet!</Card.Title>
                            <Button style={{ backgroundColor: '#B5838D' }}>Add Pet</Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default AddBtn;

