import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormComponent from "../components/formComponent"

const headerText = "Location Info"
const nextPageName = "/planGeneratorPage6/"
const prevPageName = "/planGeneratorPage4/"
const progressBar = 62.5
const formInfo = [
  {
    title: "Incident File Location",
    description: "URL/path to incident file",
    placeholder: "ir.acme.tld/files/codename",
    id: "ifLocation",
  },
  {
    title: "Critical Info List Location",
    description:
      "URL/path to critical information list, data you want to protect",
    placeholder: "ir.acme.tld/cil",
    id: "cilLocation",
  },
  {
    title: "Critical Asset List Location",
    description: "URL/path to critical asset list, systems you want to protect",
    placeholder: "ir.acme.tld/cal",
    id: "calLocation",
  },
  {
    title: "Asset Management Database Location",
    description: "URL/path to asset management DB",
    placeholder: "ir.acme.tld/assets",
    id: "amdLocation",
  },
  {
    title: "Network Map Location",
    description: "URL/path to network map",
    placeholder: "ir.acme.tld/netmap",
    id: "nmLocation",
  },
]

const PlanGeneratorPage5 = () => (
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

export default PlanGeneratorPage5
