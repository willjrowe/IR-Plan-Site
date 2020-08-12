// THIS WAS FOR 'DYNAMIC' PAGE GENERATION

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
import Fade from "react-bootstrap/Fade"

const orgName = {
  title: "Organization Name",
  placeholderText: "Acme, Inc.",
  description: "The name of your organization",
}
const authorName = {
  title: "Author Name",
  placeholderText: "Will",
  description: "Your name",
}
const authorEmail = {
  title: "Author Email",
  placeholderText: "countact@counteractive.net",
  description: "Your email",
}
const releaseDate = {
  title: "Release Date",
  placeholderText: "1 Jan 2020",
  description: "Document control metadata",
}
const responseChat = {
  title: "Response Chat",
  placeholderText: "chat.acme.tld/codename",
  description: "URL or reference to IR chat program",
}
const authorArray = [orgName, authorName, authorEmail, releaseDate]
const responseArray = [responseChat]
const authorPage = {
  header: "First a bit about you...",
  questionArray: authorArray,
}
const listOfPages = [authorPage]
var pageContent = []

for (var i = 0; i < listOfPages.length; i++) {
  pageContent[i] = generateFormGroupJSX(listOfPages[i])
}

function generateFormGroupJSX(page) {
  var questions = []
  for (var j = 0; j < page.questionArray.length; j++) {
    questions.push(
      <Form.Group controlId="formBasicEmail" key={page.questionArray[j].title}>
        <Form.Label>{page.questionArray[j].title}</Form.Label>
        <Form.Control
          type="text"
          placeholder={page.questionArray[j].placeholderText}
        />
        <Form.Text className="text-muted">
          {page.questionArray[j].description}
        </Form.Text>
      </Form.Group>
    )
  }
  return questions
}

console.log("Page content")
console.log(pageContent)

//generate html for each page

var currentPage = 0

function updatePage() {
  currentPage += 1
}

const GeneratorPage = () => (
  <Layout>
    <SEO title="Plan" />
    <Container fluid>
      <Container id="generatorContainer">
        <h1 id="generatorHeader">Your Custom Plan</h1>
        <h2>hi</h2>
      </Container>
      <Container id="testContainer">
        <Form>
          {pageContent[currentPage]}
          <Container className="text-center">
            <Button
              variant="primary"
              className="mb-3"
              onClick={() => updatePage()}
            >
              Next
            </Button>
            <ProgressBar animated now={45} />
          </Container>
        </Form>
      </Container>
    </Container>
  </Layout>
)

export default GeneratorPage
