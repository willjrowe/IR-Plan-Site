import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormComponent from "../components/formComponent"

const headerText = "Roster Info"
const nextPageName = "/planGeneratorPage5/"
const prevPageName = "/planGeneratorPage3/"
const progressBar = 50
const formInfo = [
  {
    title: "Security Team Roster",
    description: "URL/path to Security Team roster/list",
    placeholder: "ir.acme.tld/sec-roster",
    id: "SECURITY_TEAM_ROSTER",
  },
  {
    title: "Team SME Roster",
    description: "URL/path to Team SME roster/list",
    placeholder: "ir.acme.tld/sme-roster",
    id: "TEAM_SME_ROSTER",
  },
  {
    title: "Executive Roster",
    description: "URL/path to Executive roster/list",
    placeholder: "ir.acme.tld/exec-roster",
    id: "EXECUTIVE_ROSTER",
  },
]

const PlanGeneratorPage4 = () => (
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

export default PlanGeneratorPage4
