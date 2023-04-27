import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import {
  FcAbout,
  FcAssistant,
  FcBinoculars,
  FcBusinessman,
  FcHome,
} from "react-icons/fc";
import CitrusPic from "../images/CitrusPic.webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar dark expand="md" className="custom-navbar">
        <div className="navbar-content">
          <NavbarBrand className="ms-5 navbar-left" href="/">
            <img
              src={CitrusPic}
              alt="Colorful fruits slices"
              className="header-pic"
            />
          </NavbarBrand>

          <div className="navbar-middle">
            <h1 className="mt-1">Healthy & Vibrant</h1>
            <p>Providing Wellness Through Nutrition and Lifestyle</p>
          </div>

          <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
          <Collapse isOpen={menuOpen} navbar className="custom-navbar-collapse">
            <Nav
              className={`ms-auto navbar-right${
                menuOpen ? " expanded-nav-items" : ""
              }`}
              navbar
            >
              <NavItem>
                <NavLink className="nav-link" to="/" href="/">
                  <FcHome /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about" href="/about">
                  <FcAbout /> About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/schedule" href="/projects">
                  <FcBinoculars /> Schedule
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/order-here" href="/resume">
                  <FcBusinessman /> Order
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/blog" href="/skills">
                  <FcAssistant /> Blog
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
