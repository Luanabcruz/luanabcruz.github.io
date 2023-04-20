import Container from 'react-bootstrap/Container';

import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { useEffect, useState } from 'react';
import pageApi from '../services/page';

const Header = ({ title }) => {

    const imgSrc = `${process.env.PUBLIC_URL}brand_ufca_header.png`;

    const [listDisciplines, setListDiscipline] = useState([]);
    
    useEffect(() => {
        pageApi.listDisciplines().then((response) => setListDiscipline(response.data))
        .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
        });
        
  
    }, []);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Ensino" id="nav-education">
                            {listDisciplines.map(item => (
                                 <NavDropdown.Item as={Link} to={`/ensino/${item.slug}`} key={item.slug}>
                                 {item.name}
                             </NavDropdown.Item>    
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>);
};

export default Header;
