import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormComponent from "../components/formComponent"

const headerText = "Vender Info"
const nextPageName = "/reviewPlan/"
const prevPageName = "/planGeneratorPage7/"
const progressBar = 100
const formInfo = [
  {
    title: "Incident Response Vendor",
    description: "Vendor for IR and infosec support",
    placeholder: "[Counteractive Security](https://www.counteractive.net)",
    id: "irVendor",
  },
  {
    title: "Public Relations Vendor",
    description: "Vendor for PR support",
    placeholder: "pr.firm.tld",
    id: "prVendor",
  },
  {
    title: "Insurance Vendor",
    description: "(Cyber) insurance provider",
    placeholder: "cyber.insurance.tld",
    id: "inVendor",
  },
  {
    title: "ISAC Contact",
    description: "Industry ISAC contact info",
    placeholder:
      "https://en.wikipedia.org/wiki/Information_Sharing_and_Analysis_Center",
    id: "isacContact",
  },
  {
    title: "AAR SLA",
    description:
      "After action review (AAR) service level agreement (time after completion of incident to conduct AAR)",
    placeholder: "5 business days",
    id: "aarSLA",
  },
  {
    title: "AAR Attendees",
    description: "AAR attendees",
    placeholder: "ir.acme.tld/aar/attendees",
    id: "aarAttendees",
  },
]

const PlanGeneratorPage8 = () => (
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

export default PlanGeneratorPage8
