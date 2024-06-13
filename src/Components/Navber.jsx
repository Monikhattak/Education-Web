import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { IoSearchCircle } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./Navber.css";
import { Link } from "react-router-dom";

// import logo from './path/to/your/logo.png'; // Replace with the actual path to your logo

export default function Navber() {
  return (
    <Navbar bg="dark" variant={"dark"} expand="lg">
      <Navbar.Brand href="#home" className="Code">
        CodeX
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Link to="/" active className="Home link">
            Home
          </Link>
          <Link to="/contact" active className="Categorys link">
            Contact
          </Link>
          <Link to="/courses" active className="category link">
            Courses
          </Link>
        </Nav>
        <div className="Search">
          <input type="text" placeholder="Search" />
          <button className="btn1">
            <IoSearchCircle />
          </button>
        </div>
        <div className="Signup">
          <button className="btn">
            <IoMdPerson /> Signup
          </button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
