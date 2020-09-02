import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Jumbotron, Container, Button } from "react-bootstrap"
import "./customStyle.css"

const JumbotronSection = () => (
  <Jumbotron fluid className="jumboBackground">
    <Container>
      <h1 className="medText">The Plan Generator</h1>
    </Container>
  </Jumbotron>
)

class PrimaryBodySection extends React.Component {
  render() {
    return (
      <Container>
        <h1 className="miniHeader">What are you building?</h1>
        <p>
          The next few pages will ask you to input some information about the
          specifics of your organization such as contact information and team
          rosters. Don't worry your plan is generated completely on the
          client-side, meaning we don't collect any of your data.
        </p>
        <Link to="/planGeneratorPage1/">
          <Button variant="primary">Build a new plan!</Button>
        </Link>
      </Container>
    )
  }
}

const PlanPage = () => (
  <Layout>
    <SEO title="Plan" />
    <JumbotronSection />
    <PrimaryBodySection />
  </Layout>
)

export default PlanPage
