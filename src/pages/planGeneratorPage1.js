import React from "react"
import { Link, navigate } from "gatsby"

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
    id: "organizationName",
  },
  {
    title: "Organization Domain",
    description: "Domain name for your organization",
    placeholder: "acme.tld",
    id: "organizationDomain",
  },
  {
    title: "Author Name",
    description: "Name of plan author",
    placeholder: "Will",
    id: "authorName",
  },
  {
    title: "Author Email",
    description: "Email of plan author",
    placeholder: "contact@counteractive.net",
    id: "authorEmail",
  },
  {
    title: "Release Date",
    description: "Document control metadata",
    placeholder: "1 Jan 2020",
    id: "releaseDate",
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
