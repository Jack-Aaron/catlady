import React from 'react';
import Card from 'react-bootstrap/Card';
import './style.css';

const PetCard = (props) => {

    return (
        <div>
            <a href='/'>
                <Card className='petCard' id={props.id} style={{
                    backgroundColor: '#FFB4A2',
                    border: '3px solid #E5989B',
                    borderRadius: '10px',
                    filter: 'grayscale(50%)'
                }}>
                    <Card.Img src={props.imgsrc} className='petImg' alt="Card image cap" style={{
                        maxHeight: '300px',
                        maxWidth: '200px'
                    }} />
                    <Card.Body>
                        <Card.Title>{props.name}</Card.Title>
                        <Card.Subtitle>{props.type}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </a>
        </div>
    )
}

export default PetCard;
