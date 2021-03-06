import React, { useEffect, useState } from "react";
import API from "../utils/API";
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

  //petImage wait-to-load section
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  }

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
        <Row style={{
          display: loading ? 'none' : 'flex',
        }} className="justify-content-around">
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
                    imageLoaded={imageLoaded}
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
