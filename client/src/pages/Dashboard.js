import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Header from "../components/Header";
import Container from "../components/Container";
import PetCard from "../components/PetCard";
import AddBtn from "../components/AddBtn";

function Dashboard() {
  const [petsState, setPetsState] = useState([]);

  useEffect(() => {
    API.getPets().then((res) => {
      console.log(res.data);
      setPetsState(res.data);
    });
  }, []);

  const [userData, setUserData] = useState({
    username: "",
    id: "",
  });

 
  const hasPets = petsState.map((pet) => (
    <Col xs="auto" style={{ paddingBottom: 15 }}>
      <PetCard
        name={pet.name}
        imgsrc={pet.imgsrc}
        type={pet.type}
        description={pet.description}
      />
    </Col>
  ));
  const noPets = <div> No Pets Found</div>;

  return (
    <div>
      <Header />
      <Container>
        <Row className="justify-content-around">
          {petsState.length !== 0 ? hasPets : noPets}
        </Row>
        <Row>
          <Col>
            <AddBtn />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Dashboard;
