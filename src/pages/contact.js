import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Jumbotron, Container, Button } from "react-bootstrap"
import "./customStyle.css"

const JumbotronSection = () => (
  <Jumbotron fluid className="jumboBackground">
    <Container>
      <h1 className="medText">Contact</h1>
    </Container>
  </Jumbotron>
)

class PrimaryBodySection extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="miniHeader">Contact Information</h1>
        <p>Phone: (888) 925-5765</p>
        <p>Email: contact@counteractive.net</p>
        <p>Github: https://github.com/counteractive</p>
        <h1 className="miniHeader">Issues with this site?</h1>
        <p>
          Please fill out the below form or email (make this a mini link)
          contact@counteractive.net ADD INPUT FORM HERE
        </p>
      </Container>
    )
  }
}

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <JumbotronSection />
    <PrimaryBodySection />
  </Layout>
)

export default ContactPage
