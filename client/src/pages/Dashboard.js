import React from 'react';
import {
    Container,
    Row,
    Col,
} from 'reactstrap';
import Header from '../components/Header';
import PetCard from '../components/PetCard';
import AddBtn from '../components/AddBtn';

function Dashboard() {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col>
                        <PetCard />
                    </Col>
                    <Col>
                        <PetCard />
                    </Col>
                    <Col>
                        <PetCard />
                    </Col>
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