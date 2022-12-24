/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

//====== bootstrap ===========
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//======== nav =======
// import Nav from './header/Nav';
import Logo from "../logo/Logo";
//======== import img ===========
import logo from "../../assets/images/logo.png";

// ======== import img ======
import icon_tin_chap from "../../assets/images/icon-tin-chap.png";
import icon_the_chap from "../../assets/images/icon-the-chap.png";

const Header = () => {
  const [currentY, setCurrentY] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let changeY = window.scrollY;
      setVisible(currentY > changeY);
      setCurrentY(changeY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const show_hidden = visible ? "visible" : "hidden";

  return (
    <>
      <Navbar bg="light" expand="lg" className={show_hidden}>
        <Container>
          <Navbar.Brand href="#home" className="nav-brand">
            {/* <img src={logo} alt="logo" className="logo" /> */}
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" width="fit-content">
              <NavDropdown
                className="drop-nav"
                title="Vay"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#vay-tin-chap">
                  <img className="icon-nav-drop-item" src={icon_tin_chap} />
                  Vay tín chấp
                </NavDropdown.Item>
                <NavDropdown.Item href="#vay-the-chap">
                  <img className="icon-nav-drop-item" src={icon_the_chap} />
                  Vay thế chấp
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href="#bao-hiem"
                className="drop-vay"
                // title="Bảo hiểm"
                // id="basic-nav-dropdown"
              >
                Bảo hiểm
              </Nav.Link>
              <Nav.Link
                href="#san-pham"
                className="drop-vay"
                id="basic-nav-dropdown"
              >Sản phẩm</Nav.Link>
              <Nav.Link
              href='#ve-chung-toi'
                className="drop-vay"
                id="basic-nav-dropdown"
              >Về chúng tôi</Nav.Link>
              <Nav.Link
                href="#lien-he"
                id="basic-nav-dropdown"
              >Liên hệ</Nav.Link>
              <NavDropdown
                className="drop-vay"
                title="CTV"
                id="basic-nav-dropdown"
              ></NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
