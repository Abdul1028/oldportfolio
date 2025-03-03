// import { useState } from "react";
// import { Button } from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import { Link, NavLink } from "react-router-dom";
// import "../pages/style.css";


// function Header() {
//   const [expand, updateExpanded] = useState(false);
//   const [navColour, updateNavbar] = useState(false);

//   function scrollHandler() {
//     if (window.scrollY >= 20) {
//       updateNavbar(true);
//     } else {
//       updateNavbar(false);
//     }
//   }

//   window.addEventListener("scroll", scrollHandler);

//   return (
//     <Navbar
//       expanded={expand}
//       fixed="top"
//       expand="md"
//       className={navColour ? "sticky" : "navbar"}
//     >
//       <Navbar.Brand className="logotext" as={Link} to="/">
//         <div className="logo"></div>
//       </Navbar.Brand>

//       <Navbar.Toggle
//         className="navbar-toggler"
//         aria-controls="responsive-navbar-nav"
//         onClick={() => {
//           updateExpanded(expand ? false : "expanded");
//         }}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </Navbar.Toggle>
//       <Navbar.Collapse id="responsive-navbar-nav" className="responsive-navbar">
//         <Nav className="ms-auto" defaultActiveKey="#home">
//           <Nav.Item>
//             <NavLink
//               className="nav-link"
//               to="/"
//               onClick={() => updateExpanded(false)}
//             >
//               Home
//             </NavLink>
//           </Nav.Item>
//           <Nav.Item>
//             <NavLink
//               className="nav-link"
//               to="/about"
//               onClick={() => updateExpanded(false)}
//             >
//               About
//             </NavLink>
//           </Nav.Item>

//           <Nav.Item>
//             <NavLink
//               className="nav-link"
//               to="/project"
//               onClick={() => updateExpanded(false)}
//             >
//               Projects
//             </NavLink>
//           </Nav.Item>

//           <Nav.Item>
//             <NavLink
//               className="nav-link"
//               to="/contact"
//               onClick={() => updateExpanded(false)}
//             >
//               Contact
//             </NavLink>
//           </Nav.Item>

//           <Button
//             onClick={() => {
//               window.open(
//                 "https://www.google.com"
//               );
//             }}
//             className="resumebtn"
//           >
//             <span>Resume</span>
//           </Button>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Header;

import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "../pages/style2.css";

function Header() {
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      fixed="top"
      expand="md"
      className={`custom-navbar ${navColour ? "sticky" : ""}`}
    >
      <Navbar.Brand className="logotext" as={Link} to="/">
        <div className="logo"></div>
      </Navbar.Brand>

      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbar-toggler"
      />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/project"
            >
              Projects
            </NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink
              className="nav-link"
              to="/contact"
            >
              Contact
            </NavLink>
          </Nav.Item>
          <Button
            onClick={() => {
              window.open("https://www.google.com");
            }}
            className="resumebtn"
          >
            <span>Resume</span>
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
