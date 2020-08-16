import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormComponent from "../components/formComponent"

const headerText = "URL? Info"
const nextPageName = "/planGeneratorPage7/"
const prevPageName = "/planGeneratorPage5/"
const progressBar = 75
const formInfo = [
  {
    title: "SIEM Console URL",
    description: "URL to SIEM",
    placeholder: "siem.acme.tld",
    id: "siemURL",
  },
  {
    title: "Log Aggregator URL",
    description: "URL to log aggregator",
    placeholder: "elk.acme.tld",
    id: "laURL",
  },
  {
    title: "Incident Response Template",
    description: "URL/path to IR report template",
    placeholder: "ir.acme.tld/report/template",
    id: "irTemplate",
  },
  {
    title: "Incident Report Recipients",
    description: "URL/path to report recipient list",
    placeholder: "ir.acme.tld/report/recipients",
    id: "irRecipients",
  },
]

const PlanGeneratorPage6 = () => (
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

export default PlanGeneratorPage6
