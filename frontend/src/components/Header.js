import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

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
            </Container>
        </Navbar>);
};

export default Header;
