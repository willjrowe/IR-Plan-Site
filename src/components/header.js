import PropTypes from "prop-types"
import React from "react"
import NavBar from "react-bootstrap/NavBar"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Logo from "../images/gatsby-icon.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const Header = ({ siteTitle }) => (
  <Container>
    <NavBar fixed="top" bg="dark" variant="dark" expand="sm">
      <NavBar.Brand href="/">{siteTitle}</NavBar.Brand>
      <NavBar.Toggle aria-controls="headerNav" />
      <NavBar.Collapse id="headerNav">
        <Nav className="ml-auto">
          {/* change these to gatsby links at some point */}
          <Nav.Link>About</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
          <Nav.Link>Docs</Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faCoffee} size="1x" />
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
