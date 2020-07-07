import React, { Link, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import API from "../../utils/API";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";

toast.configure()


const PetCard = (props) => {
    let history = useHistory();

    const CustomToast = ({ closeToast }) => {
        return (
            <>
                <h4>Are you <i>sure</i> you want to remove {props.name}?</h4>
                <Button variant='danger'
                    onClick={closeToast}
                >No, keep my precious {props.name}!</Button>&nbsp;&nbsp;&nbsp;
                <Button variant='success'
                    onClick={() => { props.handleDelete(props.id) }}
                >Yes, Remove.</Button>
            </>
        )
    }

   
    const notify = () => {
        toast.warn(<CustomToast />, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: false
        })
    }

    const handleClick = (event) => {
        let petId = event.target.name
        API.getCurrentPet(petId)
            .then(res => {
                props.setCurrentPet(res.data)
                history.push("/petProfile")
            })
    }

    return (
        <div>
            <Card
                className='petCard'
                id={props.id}
                style={{
                    backgroundColor: '#FFB4A2',
                    border: '3px solid #E5989B',
                    borderRadius: '10px',
                    filter: 'grayscale(50%)',

                }}>
                <Card.Img
                    onLoad={props.imageLoaded}
                    src={props.imgsrc}
                    className='petImg' alt="Card image cap"
                    style={{
                        maxHeight: '300px',
                        maxWidth: '200px'
                    }} />
                <Card.Body>
                    <Card.Title>{props.name}
                        <span as={Link}
                            style={{ float: 'right', color: 'red' }}
                            onClick={() => { notify() }}
                        >X</span>
                    </Card.Title>
                    <Card.Subtitle>{props.type}</Card.Subtitle>
                </Card.Body>
                <Button
                    name={props.id}
                    onClick={handleClick}
                >Select Pet
                </Button>
            </Card>
        </div >
    )
}

export default PetCard;
