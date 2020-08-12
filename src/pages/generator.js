import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import bodyStyle from "./bodyStyle.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import ProgressBar from "react-bootstrap/ProgressBar"

const GeneratorPage = () => (
  <Layout>
    <SEO title="Plan" />
    <Container id="generatorContainer">
      <h1 id="generatorHeader">Your Custom Plan</h1>

      <h2>First a bit about you...</h2>
    </Container>
    <Container id="testContainer">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Organization Name</Form.Label>
          <Form.Control type="text" placeholder="Acme, Inc." />
          <Form.Text className="text-muted">
            The name of your Organization
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Author Name</Form.Label>
          <Form.Control type="text" placeholder="Will" />
          <Form.Text className="text-muted">Your name</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Author Email</Form.Label>
          <Form.Control type="text" placeholder="contact@counteractive.net" />
          <Form.Text className="text-muted">Your email</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Release Date</Form.Label>
          <Form.Control type="text" placeholder="1 Jan 2020" />
          <Form.Text className="text-muted">
            Document control metadata
          </Form.Text>
        </Form.Group>
        <Container className="text-center">
          <Button variant="primary" type="submit" className="mb-3">
            Next
          </Button>
          <ProgressBar animated now={45} />
        </Container>
      </Form>
    </Container>
  </Layout>
)

export default GeneratorPage
