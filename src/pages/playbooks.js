import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Jumbotron, Container, Button } from "react-bootstrap"
import "./customStyle.css"

const JumbotronSection = () => (
  <Jumbotron fluid className="jumboBackground">
    <Container>
      <h1 className="medText">Playbooks</h1>
    </Container>
  </Jumbotron>
)

class PrimaryBodySection extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="miniHeader">We got em</h1>
        <p>A lot of them</p>
      </Container>
    )
  }
}

const PlaybookPage = () => (
  <Layout>
    <SEO title="Playbooks" />
    <JumbotronSection />
    <PrimaryBodySection />
  </Layout>
)

export default PlaybookPage
