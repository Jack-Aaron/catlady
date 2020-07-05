import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "../components/Header";
import Container from "../components/Container";
import PetCard from "../components/PetCard";
import AddBtn from "../components/AddBtn";
import AddBtnFood from "../components/AddBtnFood";
import ViewFood from "../components/ViewFood";
import Cat from '../assets/cat.png';
import Dog from '../assets/dog.png';


function Dashboard(props) {
  
  const [petsState, setPetsState] = useState([]);
  

  useEffect(() => {
    API.getPets().then((res) => {
      setPetsState(res.data);
    })
  }, []);


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
                  />
                </Col >
              )) : noPets}
        </Row>
        <Row>
          <Col>
            <AddBtn />
          </Col>
          <Col>
            <AddBtnFood />
          </Col>
          <Col>
            <ViewFood />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
