import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';

const PetCard = (props) => {

    return (
        <div>
            <a href='/'>
                <Card className='petCard' style={{
                    backgroundColor: '#FFB4A2',
                    filter: 'grayscale(50%)'

                }}>
                    <Card.Img top width="100%" src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="Card image cap" style={{
                        maxHeight: '200px'
                    }} />
                    <Card.Body>
                        <Card.Title>Pet Name</Card.Title>
                        <Card.Subtitle>Pet Type</Card.Subtitle>
                        <Card.Text>Pet description.</Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </div>
    )
}

export default PetCard;