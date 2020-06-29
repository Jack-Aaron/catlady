import React, { useEffect, useState } from 'react';
import API from '../../src/utils/API.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Header from '../components/Header';
import Container from '../components/Container';
import PetCard from '../components/PetCard';
import AddBtn from '../components/AddBtn';

function Dashboard() {

    const [petsState, setPetsState] = useState([]);

    useEffect(() => {
        API.getPets()
            .then((res) => {
                setPetsState(res.data);
            })
    }, []
    );

    return (
        <div>
            <Header />
            <Container>
                <Row className='justify-content-around'>
                    {petsState.map(pet => {
                        return (
                            <Col xs='auto' style={{ paddingBottom: 15 }}>
                                <PetCard
                                    name={pet.name}
                                    imgsrc={pet.imgsrc}
                                    type={pet.type}
                                    description={pet.description}
                                />
                            </Col>
                        )
                    }
                    )}
                </Row>
                <Row>
                    <Col>
                        <AddBtn />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard;
