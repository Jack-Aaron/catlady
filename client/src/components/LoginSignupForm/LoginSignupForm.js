import React from 'react';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from '../Container';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import './style.css'


function LoginSignupForm(props) {
    return (
        <Container className='pb-3'>
            <Row className="row justify-content-center pb-5">
                <Col className="col-md-12 col-md-offset-3">
                    <Card className="card px-4" id="card" style={{
                        borderRadius: "2em",
                        boxShadow: "0px 0px 4px 4px #ccc",
                    }}>
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center',
                        height:0 }}>{props.formname}</Card.Title>
                            <Form className="login">
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="exampleInputEmail1">Email address</Form.Label>
                                    <Form.Control
                                        onChange={props.handleChange}
                                        name="username"
                                        type="email"
                                        className="form-control"
                                        placeholder="Email (required)"
                                        value={props.uValue} />
                                </Form.Group>
                                <Form.Group className="form-group">
                                    <Form.Label htmlFor="exampleInputPassword1">Password</Form.Label>
                                    <Form.Control
                                        onChange={props.handleChange}
                                        name="password"
                                        type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        value={props.pValue} />
                                </Form.Group>
                                <Button
                                    disabled={!(props.formUser && props.formPass)}
                                    onClick={props.handleFormSubmit}
                                    type="submit"
                                    className="btn btn-primary">{props.buttonText}
                                </Button>
                                <Form.Group className='pt-2'>
                                {props.children}
                                </Form.Group>
                            </Form>
                          
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default LoginSignupForm