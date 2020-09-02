import React from "react"
import { Link } from "gatsby"

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
    id: "INCIDENT_FILE_LOCATION",
  },
  {
    title: "Critical Info List Location",
    description:
      "URL/path to critical information list, data you want to protect",
    placeholder: "ir.acme.tld/cil",
    id: "CRITICAL_INFO_LIST_LOCATION",
  },
  {
    title: "Critical Asset List Location",
    description: "URL/path to critical asset list, systems you want to protect",
    placeholder: "ir.acme.tld/cal",
    id: "CRITICAL_ASSET_LIST_LOCATION",
  },
  {
    title: "Asset Management Database Location",
    description: "URL/path to asset management DB",
    placeholder: "ir.acme.tld/assets",
    id: "ASSET_MGMT_DB_LOCATION",
  },
  {
    title: "Network Map Location",
    description: "URL/path to network map",
    placeholder: "ir.acme.tld/netmap",
    id: "NETWORK_MAP_LOCATION",
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
