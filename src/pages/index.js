import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import bodyStyle from "./bodyStyle.css"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"

//build a new custom Card
const CardSection = () => (
  <Container fluid>
    <Row>
      <Col />
      <Col>
        <Card id="testCard" className="border-0">
          <Card.Body>
            <Card.Title>
              <FontAwesomeIcon icon={faCoffee} size="4x" />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Fast</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card id="testCard" className="border-0">
          <Card.Body>
            <Card.Title>
              <FontAwesomeIcon icon={faCoffee} size="4x" />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Flexible</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card id="testCard" className="border-0">
          <Card.Body>
            <Card.Title>
              <FontAwesomeIcon icon={faCoffee} size="4x" />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Efficient</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col />
    </Row>
  </Container>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container fluid id="mainBody">
      <Jumbotron>
        <h1>Incident Response Planning Made Easy</h1>
        <p>Helping you stay safe since Day 1</p>
        {/* padding potentially */}
        <p>
          <Link to="/plan/">
            <Button variant="primary">Build your custom plan now!</Button>
          </Link>
        </p>
      </Jumbotron>
    </Container>
    <Container>
      <p>
        Create your own concise, flexible, and free incident response plan here,
        based on our compilation of best practices. Simply input your
        information and press enter to see the changes in the preview section.
        Download a copy by clicking the "Download" link for either HTML or
        Markdown format. For professional assistance with incident response, or
        with customizing, implementing, or testing your plan, please contact us.
      </p>
    </Container>
    <CardSection />
  </Layout>
)

export default IndexPage
