import PropTypes from "prop-types"
import React from "react"

import { Link } from "gatsby"
import { Container, Nav } from "react-bootstrap"
import NavBar from "react-bootstrap/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import "./header.css"

const Header = ({ siteTitle }) => (
  <Container>
    <NavBar
      fixed="top"
      expand="sm"
      id="headerCSS"
      className="headerCSS navbar-light"
    >
      <NavBar.Brand id="headerCSS" className="headerCSS">
        <Link id="headerCSS" to="/">
          {siteTitle}
        </Link>
      </NavBar.Brand>
      <NavBar.Toggle aria-controls="headerNav" />
      <NavBar.Collapse id="headerNav">
        <Nav className="ml-auto headerCSS">
          {/* change these to gatsby links at some point */}
          <Nav.Link id="headerCSS">
            <Link id="headerCSS" to="/about/">
              About
            </Link>
          </Nav.Link>
          <Nav.Link id="headerCSS">
            <Link id="headerCSS" to="/playbooks/">
              Playbooks
            </Link>
          </Nav.Link>
          <Nav.Link id="headerCSS">
            <Link id="headerCSS" to="/contact/">
              Contact
            </Link>
          </Nav.Link>
          <Nav.Link
            href="https://github.com/counteractive/incident-response-plan-template"
            id="headerCSS"
          >
            <FontAwesomeIcon icon={faGithub} size="1x" />
          </Nav.Link>
        </Nav>
      </NavBar.Collapse>
    </NavBar>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
