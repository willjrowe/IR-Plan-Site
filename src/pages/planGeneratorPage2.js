import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormComponent from "../components/formComponent"

const headerText = "Response Chat Info"
const nextPageName = "/planGeneratorPage3/"
const prevPageName = "/planGeneratorPage1/"
const progressBar = 25
const formInfo = [
  {
    title: "Response Chat",
    description: "URL or reference to IR chat program",
    placeholder: "chat.acme.tld/codename",
    id: "responseChat",
  },
  {
    title: "Response Phone",
    description: "Phone number for response teleconference",
    placeholder: "123-RES-PONS",
    id: "responsePhone",
  },
  {
    title: "Response VTC",
    description: "URL for response video teleconference (VTC)",
    placeholder: "video.acme.tld/codename",
    id: "responseVTC",
  },
]

const PlanGeneratorPage2 = () => (
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

export default PlanGeneratorPage2
