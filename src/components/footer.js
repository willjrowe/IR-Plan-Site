import React from "react"
import Container from "react-bootstrap/Container"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

const Footer = () => (
  <Container className="text-center">
    <br />
    <hr />
    <p>Counteractive © {new Date().getFullYear()}</p>
    <p>
      <FontAwesomeIcon icon={faCoffee} size="1x" />
      <FontAwesomeIcon icon={faCoffee} size="1x" />
      <FontAwesomeIcon icon={faCoffee} size="1x" />
      <FontAwesomeIcon icon={faCoffee} size="1x" />
    </p>
  </Container>
)

export default Footer
