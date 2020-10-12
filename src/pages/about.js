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
        <p>
          Counteractive Security was founded to serve—to deliver outstanding
          client engagement alongside technical excellence. We put our
          education, training, and experience to work for you, creating concrete
          value and mitigating risk. Your business, your mission, and your
          critical data are central.
        </p>
        <p>
          Our philosophy was built through years of service in national security
          and law enforcement investigations, security operations centers
          (SOCs), incident response, and commercial consulting. We've built and
          improved teams large and small, assisted industries from education to
          finance to medicine to retail, and responded to incidents from basic
          malware to advanced persistent threats (APTs).
        </p>
        <p>
          Our team maintains certifications including ISC2 Certified Information
          Systems Security Professional (CISSP®), GIAC Certified Forensic
          Analyst (GCFA), GIAC Certified Incident Handler (GCIH), and more.
        </p>
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
