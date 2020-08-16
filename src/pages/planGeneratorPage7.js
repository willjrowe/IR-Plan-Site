import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormComponent from "../components/formComponent"

const headerText = "Team Info"
const nextPageName = "/planGeneratorPage8/"
const prevPageName = "/planGeneratorPage6/"
const progressBar = 87.5
const formInfo = [
  {
    title: "Compliance Team",
    description: "Compliance team name",
    placeholder: "the legal team, legal@acme.tld",
    id: "COMPLIANCE_TEAM",
  },
  {
    title: "Communications Team",
    description: "Communications team name",
    placeholder: "the marketing team, marketing@acme.tld",
    id: "COMMUNICATIONS_TEAM",
  },
  {
    title: "Executive Team",
    description: "Executive team name",
    placeholder: "the front office, bosses@acme.tld",
    id: "EXECUTIVE_TEAM",
  },
  {
    title: "Legal Team",
    description: "Legal team name",
    placeholder: "the legal team, legal@acme.tld",
    id: "LEGAL_TEAM",
  },
  {
    title: "Local Law Enforcement Contact",
    description: "Local law enforcement contact info",
    placeholder: "police@local.gov.tld",
    id: "LOCAL_LE_CONTACT",
  },
  {
    title: "FBI Contact",
    description: "FBI contact info",
    placeholder: "1-800-CALL-FBI (225-5324), https://www.fbi.gov/contact-us",
    id: "FBI_CONTACT",
  },
]

const PlanGeneratorPage7 = () => (
  <Layout>
    <FormComponent
      headerText={headerText}
      nextPageName={nextPageName}
      prevPageName={prevPageName}
      progressBar={progressBar}
      formInfo={formInfo}
    />
  </Layout>
)

export default PlanGeneratorPage7
