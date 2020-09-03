import React from "react"
import { Link } from "gatsby"

//figure out a way to clean this up
import Layout from "../components/layout"
import SEO from "../components/seo"
import "./customStyle.css"
import { Container, Jumbotron, Button, Card, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBook,
  faHandshake,
  faChartBar,
  faExpandArrowsAlt,
} from "@fortawesome/free-solid-svg-icons"

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
          <p>
            Free, easy Incident Response plan generation for common security
            threats
          </p>
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
            <Card.Subtitle className="mb-2 text-muted">Flexible</Card.Subtitle>
            <Card.Text>
              Customize your plan to fit your organization's needs
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
            <Card.Subtitle className="mb-2 text-muted">Concise</Card.Subtitle>
            <Card.Text>
              The default plan provides general guidelines in responding to
              security threats
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
              Our plan generation is completely free and open source
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
