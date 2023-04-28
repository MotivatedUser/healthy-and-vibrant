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
  FcBusinessContact,
  FcDocument,
  FcFilingCabinet,
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
                  <FcHome className="nav-icon" /> <p className="nav-link-p" >Home</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/about" href="/about">
                  <FcAbout className="nav-icon"  /> <p className="nav-link-p" >About</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/schedule" href="/projects">
                  <FcBusinessContact className="nav-icon"  /> <p className="nav-link-p" >Schedule</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/order-here" href="/resume">
                  <FcFilingCabinet className="nav-icon"  /> <p className="nav-link-p" >Order</p>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/blog" href="/skills">
                  <FcDocument className="nav-icon"  /> <p className="nav-link-p" >Blog</p>
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
