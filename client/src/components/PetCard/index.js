
import React from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap';
// import { NavLink as RRNavLink, Router } from 'react-router-dom';
import './style.css';
// import { render } from 'react-dom';

const PetCard = (props) => {

    return (
        <div>
            <a href='/'>

                <Card className='petCard' style={{
                    backgroundColor: '#FFB4A2',
                    filter: 'grayscale(50%)'

                }}>
                    <CardImg top width="100%" src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="Card image cap" style={{
                        maxHeight: '200px'
                    }} />
                    <CardBody>
                        <CardTitle>Pet Name</CardTitle>
                        <CardSubtitle>Pet Type</CardSubtitle>
                        <CardText>Pet description.</CardText>
                    </CardBody>
                </Card>
            </a>
        </div>
    )
}

export default PetCard;