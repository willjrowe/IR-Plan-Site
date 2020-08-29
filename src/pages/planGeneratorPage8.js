import React from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FormComponent from "../components/formComponent"

const headerText = "Vendor Info"
const nextPageName = "/planDone/"
const prevPageName = "/planGeneratorPage7/"
const progressBar = 100
const formInfo = [
  {
    title: "Incident Response Vendor",
    description: "Vendor for IR and infosec support",
    placeholder: "[Counteractive Security](https://www.counteractive.net)",
    id: "INCIDENT_RESPONSE_VENDOR",
  },
  {
    title: "Public Relations Vendor",
    description: "Vendor for PR support",
    placeholder: "pr.firm.tld",
    id: "PUBLIC_RELATIONS_VENDOR",
  },
  {
    title: "Insurance Vendor",
    description: "(Cyber) insurance provider",
    placeholder: "cyber.insurance.tld",
    id: "INSURANCE_VENDOR",
  },
  {
    title: "ISAC Contact",
    description: "Industry ISAC contact info",
    placeholder:
      "https://en.wikipedia.org/wiki/Information_Sharing_and_Analysis_Center",
    id: "ISAC_CONTACT",
  },
  {
    title: "AAR SLA",
    description:
      "After action review (AAR) service level agreement (time after completion of incident to conduct AAR)",
    placeholder: "5 business days",
    id: "AAR_SLA",
  },
  {
    title: "AAR Attendees",
    description: "AAR attendees",
    placeholder: "ir.acme.tld/aar/attendees",
    id: "AAR_ATTENDEES",
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
