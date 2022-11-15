import Container from 'react-bootstrap/Container';

import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';

const Header = ({ title }) => {

    const imgSrc = `${process.env.PUBLIC_URL}brand_ufca_header.png`;

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt=""
                        src={imgSrc}
                        height="32"
                        className="d-inline-block align-top"
                    />{' '}
                    {title}
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Ensino" id="nav-education">
                            <NavDropdown.Item as={Link} to="/ensino/introducao-programacao">
                                Introdução à Programação
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/ensino/introducao-computacao">
                                Introdução à Ciência da Computação
                            </NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>);
};

export default Header;
