import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormComponent from "../components/formComponent"

const headerText = "First a bit about you..."
const nextPageName = "/planGeneratorPage2/"
const prevPageName = "null"
const progressBar = 12.5
const formInfo = [
  {
    title: "Organization Name",
    description: "The name of your organization",
    placeholder: "Acme Inc.",
    id: "COMPANY_NAME",
  },
  {
    title: "Organization Domain",
    description: "Domain name for your organization",
    placeholder: "acme.tld",
    id: "ORGANIZATION_DOMAIN",
  },
  {
    title: "Author Name",
    description: "Name of plan author",
    placeholder: "Will",
    id: "AUTHOR_NAME",
  },
  {
    title: "Author Email",
    description: "Email of plan author",
    placeholder: "contact@counteractive.net",
    id: "AUTHOR_EMAIL",
  },
  {
    title: "Release Date",
    description: "Document control metadata",
    placeholder: "1 Jan 2020",
    id: "RELEASE_DATE",
  },
]

const PlanGeneratorPage1 = () => (
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

export default PlanGeneratorPage1
