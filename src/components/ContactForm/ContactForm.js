import React from 'react';
import {Button,Label,Input,Desc,Title,Container,FormContainer,Divider,Right,Center,Left,Wrapper} from './ContactStyles'



export default function ContactForm() {
  return (
    <>
    <Container>
        <Wrapper>
            <Left>
            <Title>GET IN TOUCH</Title>
            <Desc>Please complete the form and we will get back to you.</Desc>

            </Left>
            <Center>
                <Divider></Divider>
            </Center>
            <Right>
                <form>
                <FormContainer>
                    <Label>Name*</Label>
                        <Input type={'text'} placeholder="Enter Your Name"></Input>
                        
                        <Label>Email*</Label>
                        <Input type={'email'}placeholder="Enter Your Email"></Input>
                     
                        <Label>Phone Number*</Label>
                        <Input type={'number'}  placeholder="Enter Your Number"></Input>
                       
                        <Button type="submit">Register Now</Button>
                    </FormContainer>
                </form>
            </Right>
            
      </Wrapper>
    </Container>
    </>
  )
}



