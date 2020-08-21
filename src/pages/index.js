import React from "react"
import { Link } from "gatsby"

//figure out a way to clean this up
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./customStyle.css"
import Container from "react-bootstrap/Container"
import Jumbotron from "react-bootstrap/Jumbotron"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCoffee } from "@fortawesome/free-solid-svg-icons"
import { faBook } from "@fortawesome/free-solid-svg-icons"
import { faHandshake } from "@fortawesome/free-solid-svg-icons"
import { faChartBar } from "@fortawesome/free-solid-svg-icons"
import { faExpandArrowsAlt } from "@fortawesome/free-solid-svg-icons"

const JumbotronSection = () => (
  <Jumbotron fluid className="pt-50 text-center testClass">
    <Container>
      <Row>
        <Col className="col-5">
          <h1>
            <FontAwesomeIcon className="mt-4" icon={faBook} size="6x" />
          </h1>
        </Col>
        <Col className="text-left col-7">
          <h1 className="mt-4 bigText">IR Plan</h1>
          <p>Helping you stay safe since Day 1</p>
          <Link to="/plan/">
            <Button variant="btn-lg" className="coolButton">
              Build your custom plan now!
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  </Jumbotron>
)

const CardSection = () => (
  <Container fluid>
    <Row>
      <Col />
      <Col>
        <Card className="border-0 text-center">
          <Card.Body>
            <Card.Title>
              <FontAwesomeIcon
                className="cardColor"
                icon={faExpandArrowsAlt}
                size="4x"
              />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Concise</Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card className="border-0 text-center">
          <Card.Body>
            <Card.Title>
              <FontAwesomeIcon
                className="cardColor"
                icon={faChartBar}
                size="4x"
              />
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
        <Card className="border-0 text-center">
          <Card.Body>
            <Card.Title>
              <FontAwesomeIcon
                className="cardColor"
                icon={faHandshake}
                size="4x"
              />
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Free</Card.Subtitle>
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

const PrimaryBodySection = () => (
  <Container>
    <p>
      Create your own concise, flexible, and free incident response plan here,
      based on our compilation of best practices. Simply input your information
      and press enter to see the changes in the preview section. Download a copy
      by clicking the "Download" link for either HTML or Markdown format. For
      professional assistance with incident response, or with customizing,
      implementing, or testing your plan, please contact us.
    </p>
  </Container>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <JumbotronSection />
    <PrimaryBodySection />
    <CardSection />
  </Layout>
)

export default IndexPage
