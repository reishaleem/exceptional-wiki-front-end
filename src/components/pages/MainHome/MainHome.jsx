import React from 'react';
import Navbar from '../../atoms/Navbar/Navbar'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default () => {
  

    return (
        <>
            <Navbar />
            <Jumbotron fluid>
                <Container>
                    <h1>Create your world.</h1>
                    <h1>Plan your novel.</h1>
                    <h1>Be Exceptional.</h1>
                    <Button variant="danger"><FontAwesomeIcon icon="user-plus"></FontAwesomeIcon> CREATE YOUR ACCOUNT</Button>
                </Container>
            </Jumbotron>
    
  
        </>
    )
}