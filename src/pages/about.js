import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Jumbotron, Container, Button } from "react-bootstrap"
import "./customStyle.css"

const JumbotronSection = () => (
  <Jumbotron fluid className="jumboBackground">
    <Container>
      <h1 className="medText">About</h1>
    </Container>
  </Jumbotron>
)

class PrimaryBodySection extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="miniHeader">Who?</h1>
        <p>Who what where when why</p>
      </Container>
    )
  }
}

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <JumbotronSection />
    <PrimaryBodySection />
  </Layout>
)

export default AboutPage
