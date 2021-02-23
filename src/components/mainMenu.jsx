import React from "react";

import logo2 from "../images/logo2.svg";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
const MainMenu = (props) => {
  const { pages, teams, dropDownTitle, icons } = props;
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Navbar.Brand style={{ boxShadow: "0 0 5px 0px #000" }} href="#home">
          <img className="logo" src={logo2} alt="mainLogo2"></img>
          <span className="ml-3 mr-3 text-uppercase font-weight-bold">
            Cricket Vision
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto text-center">
            {pages.map((p) => (
              <Nav.Link key={p.id} href="#home" className="text-white   ">
                {p.name}
              </Nav.Link>
            ))}
            {}
            <NavDropdown title={dropDownTitle} id="basic-nav-dropdown">
              {teams.map((t) => (
                <NavDropdown.Item
                  className="bg-info text-white"
                  href="#action/3.1"
                >
                  {t.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>

          <div class="container text-center">
            {icons.map((i) => (
              <a href="#">
                <img
                  className="mediaIcon "
                  variant="outline-success"
                  src={i.name}
                  alt="i.name"
                ></img>
              </a>
            ))}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default MainMenu;
