import React from 'react';
import "./ContactForm.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ContactForm() {
  return (
    <div className='box'>
     
     <Container>
      <Row>
        <Col sm={5}>
            <div className='left'>
            <h2>GET IN TOUCH</h2>
            <p>Please Complete the Form we will <br /> get back to you.</p>
            </div>
        </Col>
        <Col sm={7}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name*</Form.Label>
        <Form.Control type="name" placeholder="Enter Name" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email*</Form.Label>
        <Form.Control type="email" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formMobileNumber">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control type="MobileNumber" placeholder="MobileNumber" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Register Now
      </Button>
    </Form>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default ContactForm
