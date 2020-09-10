import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Jumbotron, Container, Button } from "react-bootstrap"
import "./customStyle.css"

const JumbotronSection = () => (
  <Jumbotron fluid className="jumboBackground">
    <Container>
      <h1 className="medText">Not Found</h1>
    </Container>
  </Jumbotron>
)

class PrimaryBodySection extends React.Component {
  render() {
    return (
      <Container>
        <p>Sorry, we couldn't find the page you're looking for.</p>
      </Container>
    )
  }
}

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <JumbotronSection />
    <PrimaryBodySection />
  </Layout>
)

export default NotFoundPage
