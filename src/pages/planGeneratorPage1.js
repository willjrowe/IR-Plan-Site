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
  "organizationName",
  "authorName",
  "authorEmail",
  "releaseDate",
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
  navigate("/planGeneratorPage2/")
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
            <h2>First a bit about you...</h2>
          </Container>
          <Container className="formContainer">
            <Form>
              <Form.Group>
                <Form.Label>Organization Name</Form.Label>
                <Form.Control
                  id="organizationName"
                  type="text"
                  placeholder="Acme, Inc."
                />
                <Form.Text className="text-muted">
                  The name of your organization
                </Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Author Name</Form.Label>
                <Form.Control id="authorName" type="text" placeholder="Will" />
                <Form.Text className="text-muted">Your name</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Author Email</Form.Label>
                <Form.Control
                  id="authorEmail"
                  type="text"
                  placeholder="contact@counteractive.net"
                />
                <Form.Text className="text-muted">Your email</Form.Text>
              </Form.Group>
              <Form.Group>
                <Form.Label>Release Date</Form.Label>
                <Form.Control
                  id="releaseDate"
                  type="text"
                  placeholder="1 Jan 2020"
                />
                <Form.Text className="text-muted">
                  Document control metadata
                </Form.Text>
              </Form.Group>
              <Container className="text-center">
                <Button
                  variant="primary"
                  className="mb-3"
                  onClick={() => nextPage()}
                >
                  Next
                </Button>
                <ProgressBar animated now={33} />
              </Container>
            </Form>
          </Container>
        </Container>
      </Layout>
    )
  }
}

export default PlanGeneratorPage1
