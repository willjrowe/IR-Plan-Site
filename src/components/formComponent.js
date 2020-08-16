import React from "react"
import { Link, navigate } from "gatsby"
import Container from "react-bootstrap/Container"
import "../pages/customStyle.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import ProgressBar from "react-bootstrap/ProgressBar"

class PlanGeneratorSamplePage extends React.Component {
  formContent = this.buildFormContent()

  componentDidMount() {
    this.loadLocalStorage()
  }

  loadData(element) {
    if (localStorage[element.id]) {
      document.getElementById(element.id).value = localStorage[element.id]
    }
  }

  storeData(element) {
    if (document.getElementById(element.id).value) {
      localStorage[element.id] = document.getElementById(element.id).value
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
    var children = []
    for (let j = 0; j < this.props.formInfo.length; j++) {
      children.push(
        <Form.Group key={this.props.formInfo[j].id}>
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
    return children
  }

  render() {
    return (
      <Container fluid>
        <Container className="planGeneratorHeader">
          <h1 id="generatorHeader">Your Custom Plan</h1>
          <h2>{this.props.headerText}</h2>
        </Container>
        <Container className="formContainer">
          <Form>
            {this.formContent}
            <Container className="text-center">
              {this.props.prevPageName != "null" && (
                <Button
                  variant="primary"
                  className="mb-3 mr-1"
                  onClick={() => this.prevPage()}
                >
                  Previous
                </Button>
              )}
              {this.props.nextPageName != "null" && (
                <Button
                  variant="primary"
                  className="mb-3 mr-1"
                  onClick={() => this.nextPage()}
                >
                  Next
                </Button>
              )}

              <ProgressBar animated now={this.props.progressBar} />
            </Container>
          </Form>
        </Container>
      </Container>
    )
  }
}

export default PlanGeneratorSamplePage
