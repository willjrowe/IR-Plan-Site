import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import bodyStyle from "./bodyStyle.css"
import Button from "react-bootstrap/Button"

const PlanPage = () => (
  <Layout>
    <SEO title="Plan" />
    <Container fluid id="mainBody">
      <Jumbotron>
        <h1>The Plan Generator</h1>
        <p>Helping you stay safe since Day 1</p>
      </Jumbotron>
    </Container>
    <Container>
      <h1>What are you building?</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <Link to="/generator/">
        <Button variant="primary">Get started!</Button>
      </Link>
      <h2>Your Previous Plans</h2>
    </Container>
  </Layout>
)

export default PlanPage
