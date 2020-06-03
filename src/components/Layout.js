import React from 'react';
import Container from 'react-bootstrap/Container';
import NavBar from './NavBar/NavBat';
export const Layout = (props) => (
    <React.Fragment>
        <NavBar/>
    <Container fluid="md">
        {props.children}
    </Container>
    </React.Fragment>
)