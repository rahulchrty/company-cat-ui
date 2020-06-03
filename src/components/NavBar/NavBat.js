import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark">
                    <Navbar.Brand>
                    <Link to={{
                        pathname: '/',
                    }}>
                    Home
                    </Link>
                    </Navbar.Brand>
                </Navbar>
            </React.Fragment>
        )
    }
}
export default NavBar;