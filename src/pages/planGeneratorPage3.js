import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormComponent from "../components/formComponent"

const headerText = "Incident Commander Info"
const nextPageName = "/planGeneratorPage4/"
const prevPageName = "/planGeneratorPage2/"
const progressBar = 37.5
const formInfo = [
  {
    title: "Incident Commander Roster",
    description: "URL/path to Commander roster/list",
    placeholder: "ir.acme.tld/ic-roster",
    id: "icRoster",
  },
  {
    title: "Incident Commander Pager Number",
    description: "Number to page Commander(s)",
    placeholder: "123-IR-PAGER",
    id: "icPagerNumber",
  },
  {
    title: "Incident Commander Pager URL",
    description: "URL to page Commander(s)",
    placeholder: "ir.acme.tld/ic-page",
    id: "icPagerURL",
  },
  {
    title: "Incident Commander Response SLA",
    description: "Time to wait for on-duty IC on call",
    placeholder: "15 minutes",
    id: "icResponseSLA",
  },
  {
    title: "Update Frequency",
    description: "Time between scheduled updates",
    placeholder: "4 hours",
    id: "updateFrequency",
  },
]

const PlanGeneratorPage3 = () => (
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

export default PlanGeneratorPage3
