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
        <h1 className="miniHeader">call me</h1>
        <p>or text</p>
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
