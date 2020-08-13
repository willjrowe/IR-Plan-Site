import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import "./customStyle.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import ProgressBar from "react-bootstrap/ProgressBar"
import Fade from "react-bootstrap/Fade"

const localDataNames = [
  "responseChat",
  "responsePhone",
  "responseVTC",
  "organizationDomain",
]

function loadData(dataName) {
  if (localStorage[dataName]) {
    document.getElementById(dataName).value = localStorage[dataName]
  }
}

function storeData(dataName) {
  if (document.getElementById(dataName).value) {
    localStorage[dataName] = document.getElementById(dataName).value
  }
}

function loadLocalStorage() {
  localDataNames.forEach(loadData)
}

function nextPage() {
  localDataNames.forEach(storeData)
  navigate("/planGeneratorPage3/")
}

function prevPage() {
  localDataNames.forEach(storeData)
  navigate("/planGeneratorPage1/")
}

class PlanGeneratorPage1 extends React.Component {
  componentDidMount() {
    loadLocalStorage()
  }

  render() {
    return (
      <Layout>
        <SEO title="Plan" />
        <Container fluid>
          <Container className="planGeneratorHeader">
            <h1 id="generatorHeader">Your Custom Plan</h1>
            <h2>Response Contact Information</h2>
          </Container>
          <Container className="formContainer">
            <Form>
              <Form.Group>
                <Form.Label>Response Chat</Form.Label>
                <Form.Control
                  id="responseChat"
                  type="text"
                  placeholder="chat.acme.tld/codename"
                />
                <Form.Text className="text-muted">
                  URL or reference to IR chat program
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Response Phone</Form.Label>
                <Form.Control
                  id="responsePhone"
                  type="text"
                  placeholder="123-RES-PONS"
                />
                <Form.Text className="text-muted">
                  Phone number for response teleconference
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Response VTC</Form.Label>
                <Form.Control
                  id="responseVTC"
                  type="text"
                  placeholder="video.acme.tld/codename"
                />
                <Form.Text className="text-muted">
                  URL for response video teleconference (VTC)
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Organization Domain</Form.Label>
                <Form.Control
                  id="organizationDomain"
                  type="text"
                  placeholder="acme.tld"
                />
                <Form.Text className="text-muted">
                  Domain name for your organization
                </Form.Text>
              </Form.Group>
              <Container className="text-center">
                <Button
                  variant="primary"
                  className="mb-3 mr-1"
                  onClick={() => prevPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="primary"
                  className="mb-3 ml-1"
                  onClick={() => nextPage()}
                >
                  Next
                </Button>
                <ProgressBar animated now={66} />
              </Container>
            </Form>
          </Container>
        </Container>
      </Layout>
    )
  }
}

export default PlanGeneratorPage1
