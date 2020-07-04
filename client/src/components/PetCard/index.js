import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import API from "../../utils/API";
import './style.css';

const PetCard = (props) => {

    function handleClick(event) {
        let petId = event.target.name

        API.getCurrentPet(petId)
        .then(res => console.log(res.data))
    }

    return (
        <div>
            <Card
                id={props.id}
                style={{
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
                <Button
                    name={props.id}
                    onClick={handleClick}>Select Pet
                </Button>
            </Card>
        </div >
    )
}

export default PetCard;
