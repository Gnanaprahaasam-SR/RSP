import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { AiOutlineUser } from "react-icons/ai";
import "../App.css";
import logo from "../assets/logo.png";
import { useState } from 'react';
import { GoHeart } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";

const Header = () => {
    const [expand, setExpand] = useState(false);

    const handleExpand = (value) => {
        setExpand(value);
    };

    return (
        <Navbar collapseOnSelect expand="lg" className=" " expanded={expand}>
            <Container fluid>
                <Navbar.Brand as={NavLink} to="/" className='nav_logo  d-inline text-center '>
                    <img src={logo} alt='logo' style={{ marginTop: "-2%" }} />  RSP COTTON WORLD
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={() => handleExpand(!expand)} />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto gap-2 ">
                        <Nav.Link as={NavLink} to="/" className='nav_menu' onClick={() => handleExpand(false)}>HOME</Nav.Link>
                        <Nav.Link as={NavLink} to="/aboutUs" className='nav_menu' onClick={handleExpand}>ABOUT</Nav.Link>
                        <Nav.Link as={NavLink} to="/shop" className='nav_menu' onClick={() => handleExpand(false)}>SHOP</Nav.Link>

                        {/* <NavDropdown title="CATEGORIES" className='dropdown-navbar' id="collapsible-nav-dropdown">
                            {CategoryData.map((catogory, index) => (
                                <NavDropdown.Item key={index} className='dropdown-navbar' as={Link} to={`/category/${catogory.categoryKey}`}>{catogory.title}</NavDropdown.Item>
                            ))}
                        </NavDropdown> */}
                        <Nav.Link as={NavLink} to="/contactus" className='nav_menu' onClick={() => handleExpand(false)}>CONTACT</Nav.Link>
                    </Nav>
                    <Nav className='d-flex flex-row gap-3 align-items-center'>
                        <NavLink as={NavLink} to="/wishlist" className='nav_items'><GoHeart /> WISHLIST ({1})</NavLink>
                        <NavLink as={NavLink} to="/mycart" className='nav_items'><BsCart2 /> CART ({1})</NavLink>
                        <div className='userView'>
                            <AiOutlineUser className='mt-1' />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;