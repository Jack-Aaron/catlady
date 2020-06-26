
import React, { useState } from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';
// import { NavLink as RRNavLink, Router } from 'react-router-dom';
import './style.css';
// import { render } from 'react-dom';

const PetCard = (props) => {

    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U" alt="Card image cap" style={{
                    maxHeight: '200px'
                }} />
                <CardBody>
                    <CardTitle>Card title</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )
}


export default PetCard;