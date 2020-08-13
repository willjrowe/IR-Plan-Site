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

const headerText = "Incident Commander Info"
const nextPageName = "/planGeneratorPage4/"
const prevPageName = "/planGeneratorPage2/"
const progressBar = 75
const formInfo = [
  {
    title: "Incident Commander Pager Number",
    description: "Number or URL to page Commander(s)",
    placeholder: "123-IR-PAGER",
    id: "incidentCommanderPagerNumber",
  },
  {
    title: "Incident Commander Pager URL",
    description: "Number or URL to page Commander(s)",
    placeholder: "ir.acme.tld/ic-page",
    id: "incidentCommanderPagerURL",
  },
  {
    title: "Incident Commander Roster",
    description: "URL/path to Commander roster/list",
    placeholder: "ir.acme.tld/ic-roster",
    id: "incidentCommanderRoster",
  },
]

const PlanGeneratorPage3 = (
  <PlanGeneratorSamplePage
    headerText={headerText}
    nextPageName={nextPageName}
    prevPageName={prevPageName}
    progressBar={progressBar}
    formInfo={formInfo}
  />
)

class PlanGeneratorSamplePage extends React.Component {
  componentDidMount() {
    this.loadLocalStorage()
  }

  loadData(question) {
    if (localStorage[question.id]) {
      document.getElementById(question.id).value = localStorage[question.id]
    }
  }

  storeData(question) {
    if (document.getElementById(question.id).value) {
      localStorage[question.id] = document.getElementById(question.id).value
      console.log(localStorage[question.id])
    }
  }

  nextPage() {
    this.props.formInfo.forEach(this.storeData)
    navigate(this.props.nextPageName)
  }

  prevPage() {
    this.props.formInfo.forEach(this.storeData)
    navigate(this.props.prevPageName)
  }

  loadLocalStorage() {
    this.props.formInfo.forEach(this.loadData)
  }

  buildFormContent() {
    var questions = []
    for (var j = 0; j < this.props.formInfo.length; j++) {
      questions.push(
        <Form.Group>
          <Form.Label>{this.props.formInfo[j].title}</Form.Label>
          <Form.Control
            id={this.props.formInfo[j].id}
            type="text"
            placeholder={this.props.formInfo[j].placeholder}
          />
          <Form.Text className="text-muted">
            {this.props.formInfo[j].description}
          </Form.Text>
        </Form.Group>
      )
    }
    return questions
  }

  formContent = this.buildFormContent()

  render() {
    return (
      <Layout>
        <SEO title="Plan" />
        <Container fluid>
          <Container className="planGeneratorHeader">
            <h1 id="generatorHeader">Your Custom Plan</h1>
            <h2>{this.props.headerText}</h2>
          </Container>
          <Container className="formContainer">
            <Form>
              {this.formContent}
              <Container className="text-center">
                <Button
                  variant="primary"
                  className="mb-3 mr-1"
                  onClick={() => this.prevPage()}
                >
                  Previous
                </Button>
                <Button
                  variant="primary"
                  className="mb-3 ml-1"
                  onClick={() => this.nextPage()}
                >
                  Next
                </Button>
                <ProgressBar animated now={this.props.progressBar} />
              </Container>
            </Form>
          </Container>
        </Container>
      </Layout>
    )
  }
}

export default PlanGeneratorPage3
