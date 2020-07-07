import React, { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from "../utils/API";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "../components/Header";
import Container from "../components/Container";
import PetCard from "../components/PetCard";
import AddBtn from "../components/AddBtn";
import AddBtnFood from "../components/AddBtnFood";
import Cat from '../assets/cat.png';
import Dog from '../assets/dog.png';

function Dashboard(props) {

  const [petsState, setPetsState] = useState([]);

  useEffect(() => loadPets(), []);

  const loadPets = () => {
    API.getPets().then((res) => {
      setPetsState(res.data)
    })
      .catch(err => console.log(err))
  }

  const handleDelete = (petId) => {
    API.deletePet(petId)
      .then(() => setPetsState(petsState.filter((pet) => pet._id !== petId)))
      .catch(err => console.log(err))
  }

  const noPets = <div> No Pets Found</div>;

  return (
    <div>
      <Header />
      <Container>
        <Row className="justify-content-around">
          {
            petsState.length !== 0 ?

              petsState.map((pet) => (
                < Col key={pet._id} xs="auto" style={{ paddingBottom: 15 }}>
                  <PetCard
                    name={pet.petName}
                    type={pet.petType}
                    imgsrc={pet.petType === 'Cat' ? Cat : Dog}
                    id={pet._id}
                    currentPet={props.currentPet}
                    setCurrentPet={props.setCurrentPet}
                    handleDelete={handleDelete}
                  />
                </Col >
              )) : noPets}
        </Row>
        <hr style={{ width: "80%" }} />
        <Row className="justify-content-around">
          <Col md={6}>
            <AddBtn />
          </Col>
          <Col md={6}>
            <AddBtnFood />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
