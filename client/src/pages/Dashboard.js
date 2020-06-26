import React from 'react';
import {
    Jumbotron,
    Container,
    Row,
    Col,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button
} from 'reactstrap';

function Dashboard() {
    return (
        <div>
            <Jumbotron>
                <h1 className="display-3">My Pets</h1>
                <p className="lead">Choose one of your Pets by clicking one below to check out or modify their diet.</p>
            </Jumbotron>
            <Container>
                <Row>
                    <Col>
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
                    </Col>
                    <Col>
                        <Card>
                            <CardImg top width="100%" src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y" alt="Card image cap" style={{
                                maxHeight: '200px'
                            }} />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <CardImg top width="100%" src="https://i.picsum.photos/id/1024/1920/1280.jpg?hmac=-PIpG7j_fRwN8Qtfnsc3M8-kC3yb0XYOBfVzlPSuVII" alt="Card image cap" style={{
                                maxHeight: '200px'
                            }} />
                            <CardBody>
                                <CardTitle>Card title</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Button</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <hr className="my-2" />
                        <p>Click Add Pet to begin managing the nutrition for your pet!</p>
                        <p className="lead">
                            <Button color="primary">Add Pet</Button>
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashboard;