
import React, { useEffect, useState } from 'react';
import {
    Row,
    Col,
} from 'reactstrap';

import Header from '../components/Header';
import Container from '../components/Container';
import PetCard from '../components/PetCard';
import AddBtn from '../components/AddBtn';
import API from '../utils/API';

function Dashboard() {
    const [userData, setUserData] = useState({
        username: "",
        id: "",
    })

    useEffect(() => { getUserData() }, [])

    function getUserData() {
        API.getUser()
            .then(res => setUserData(res.data))
    }

    return (
        <div>
            <Header />
            <Container>
                <Row className='justify-content-center'>
                    <Col xs='auto'>
                        <PetCard />
                    </Col>
                    <Col xs='auto'>
                        <PetCard />
                    </Col>
                    <Col xs='auto'>
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
