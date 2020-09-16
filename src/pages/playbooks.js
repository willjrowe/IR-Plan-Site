import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Jumbotron, Container, Button } from "react-bootstrap"
import "./customStyle.css"
import { asBlob } from "html-docx-js-typescript"
import Hogan from "hogan.js"
import marked from "marked"

var webDeface =
  '## Playbook: Website Defacement\r\n\r\n**Investigate, remediate (contain, eradicate), and communicate in parallel!**\r\n\r\nAssign steps to individuals or teams to work concurrently, when possible; this playbook is not purely sequential. Use your best judgment.\r\n\r\n### Investigate\r\n1. Immediately take the defaced server offline for further investigation\r\n    * This is especially important if the defacement is insulting or triggering in any way. Remove this from the public eye as quickly as possible to avoid harm as well as to mitigate business impact.\r\n    * The defacement message may also contain false information that could mislead users or put them at risk.\r\n    * Taking the server offline will allow a deeper investigation of the defacement. This may be necessary as the hacker may have dove depper into the organization accessing application servers, databases, etc.\r\n2. Determine the system\'s source of vulnerability that was used by the attacker. Common exploits include:\r\n    * SQL injection attakcs\r\n        * This kind of attack occurs when an attacker interferes with an application\'s queries to the database. Therefore, this can lead to unauthorized access to private or sensitive data. Read more about SQL injection attacks [here](https://www.acunetix.com/websitesecurity/sql-injection/)\r\n    * Remote File Inclusion (RFI) attacks\r\n        * This kind of attack exploits an application\'s referencing function to upload malware from a remote URL. Read more about RFI attacks [here](https://www.acunetix.com/blog/articles/remote-file-inclusion-rfi/)\r\n    * webshells\r\n        * More about web shells and website defacement [here](https://www.wordfence.com/blog/2017/06/wso-shell/)\r\n    * poor web application design\r\n        * javascript hacks\r\n        * PHP/ASP hacks\r\n        * Here\'s more on [hacking with javascript](https://itnext.io/how-companies-are-hacked-via-malicious-javascript-code-12aa82560bdc)\r\n    * other methods of detection include: \r\n        * Checking the server logs\r\n            * look through the web page\'s access log and error log for any suspicious or unfamiliar activity\r\n            * of course, it is also a good idea to check the IDS or IPS firewall logs, if available\r\n        * Checking files with static content\r\n        * Scanning databases for malicious content\r\n        * Checking links present in the page\r\n3. Collect any clues as to who the hacker is or what organization they are working for. Consider the following questions:\r\n    * What did the defacement portray? Did it include an obvious message?\r\n    * Did the defacement seem harmless or intentional? Could the hacker be a kid messing around or a professional group working with a motive?\r\n    * Does it seem like your organization was targeted? Who may want to target your organization?\r\n    * What did the hacker hope to accomplish?\r\n    * Consult [here](https://www.geeksforgeeks.org/types-of-hackers/) to learn more about the types of hackers that may have attacked your webpage.\r\n4. Collect other important information from the page that has been defaced such as:\r\n    * a screenshot of the defacement\r\n    * the domain and IP address of the page\r\n    * details of the web server\r\n    * page\'s source code\r\n        * analyze this carefully to identify the problem and ensure that it is on a server belonging to the company\r\n    * name or any information on the attacker\r\n6. There are also tools available to aid in both detection and log analysis. A few are listed below:\r\n    * Weblog Expert\r\n    * Sawmill\r\n    * Deep Log Analyzer\r\n\r\n\r\n`TODO: Expand investigation steps, including key questions and strategies, for website defacement.`\r\n\r\n### Remediate\r\n\r\n* **Plan remediation events** where these steps are launched together (or in coordinated fashion), with appropriate teams ready to respond to any disruption.\r\n* **Consider the timing and tradeoffs** of remediation actions: your response has consequences.\r\n\r\n#### Contain\r\n\r\n`TODO: Customize containment steps, tactical and strategic, for website defacement.`\r\n\r\n`TODO: Specify tools and procedures for each step, below.`\r\n\r\n1. Backup all data stored on the web server for forensic purposes.\r\n2. As previously mentioned, make sure to take the defaced page\'s server down temporarily while investigation occurs.\r\n    * You should have an error page prepared for this situation that informs user and/or employees that maintenance is undereway and the page they sought will return shortly. You may even wish to have a backup website prepared where you may publish content while investigation and remediation are underway and have your temporary error page redirect users to this backup site. \r\n    * Check your network architecture map. If the breach is another system on the network, take that down and investigate it.\r\n3. Once the source of the attack has been determined, apply the necessarily steps to ensure this will not happen again. This may include modifying code or editing access rights.\r\n    * Reference the "Investigate" section for common sources of vulnerability.\r\n    * If this is outside of your domain, simply ensure that you have given the appropriate personnel all the information on the attack that you have and allow experts to do their job.\r\n\r\n### Recover\r\n\r\n`TODO: Customize recovery steps for defacement`\r\n\r\n`TODO: Specify tools and procedures for each step, below`\r\n\r\n1. Remove the hacker\'s message and replace with original, legitimate content. If data was lost in the attack, reference backups and restore the original page as much as possible.\r\n    * Check backups for indicators of compromise\r\n    * Consider partial recovery and backup integrity testing\r\n2. Consider asking users to change their login credentials if the web server has user authentication. \r\n3. After implementing risk avoidance measures (as recommended below), restore your server showing the original page content. \r\n4. If necessary and/or applicable, prepare an apology/explanation of the attack that occurred for users or anyone who witnessed the defacement. Ensure that is it clear that the defacement content does not reflect your organization in any way. \r\n\r\n#### Risk Avoidance\r\n\r\n`TODO: Communicate with other employees to ensure that everyone understands and contributes to the following steps, where applicable`\r\n\r\n1. Use as few plug-ins as necessary. Hackers target websites that are vulnerable and have many sources of entry. You can limit these sources of entry by only using what you need and removing any unused or old plug ins and software. It is also important to update these as soon as possible. \r\n2. Closely monitor and mandate access to administrative content. Only allow individuals access to what they need access to. This will reduce the chance of human error leading to cyber attacks. There are more DIY methods of prevention mentioned in [this article](https://cirt.gy/index.php/node/116) (steps 6-12) and in resource #4 at the end of this playbook.\r\n3. Regularly check for malware on your site by scanning the source code. Look for scripts, iframes, or URLs that look unfamiliar and make sure to also scan URLs that do look familiar.\r\n4. There are many highly reputable automated website scanners that will not cost any of your time and will thoroughly scan your site for vulnerabilities regularly. Here is a [link to popular scanners](https://resources.infosecinstitute.com/14-popular-web-application-vulnerability-scanners/#gref).\r\n5. Defend against common points of exploitation such as SQL injections and XSS attacks. [This article](https://www.banffcyber.com/knowledge-base/articles/best-practices-address-issue-web-defacement/) includes best practices to defend these attacks.\r\n6. Install defacement detection programs so that if an attack were to occurr again, you would be prepared and respond quickly. Here is an [article](https://www.techradar.com/news/best-website-defacement-monitoring-service) that summarizes some of 2020\'s best monitoring services. \r\n7. Discuss with your employees the importance of keeping administrative access limited and confidential and inform them of these steps to avoid incidents including regular cybersecurity awareness training.\r\n\r\n#### Reference: Remediation Resources\r\n\r\n`TODO: Specify financial, personnel, and logistical resources to accomplish remediation`\r\n\r\n### Communicate\r\n\r\n`TODO: Customize communication steps for defacement`\r\n\r\n`TODO: Specify tools and procedures (including who must be involved) for each step, below, or refer to overall plan`\r\n\r\n1. Escalate incident and communicate with leadership per procedure\r\n1. Document incident per procedure (and report if applicable)\r\n1. Communicate with internal and external legal counsel per procedure, including discussions of compliance, risk exposure, liability, law enforcement contact, _etc._\r\n1. Communicate with users (internal)\r\n    1. Communicate incident response updates per procedure\r\n    1. Communicate impact of incident **and** incident response actions (e.g., containment: "why is the file share down?")\r\n    1. Communicate requirements: "what should users do and not do?"  \r\n1. Communicate with customers\r\n    1. Focus particularly on those whose data was affected\r\n    1. Generate required notifications based on applicable regulations (particularly those that may consider defacement a data breach or otherwise requires notifications) `TODO: Expand notification requirements and procedures for applicable regulations`\r\n1. Contact insurance provider(s)\r\n    1. Discuss what resources they can make available, what tools and vendors they support and will pay for, _etc._\r\n    1. Comply with reporting and claims requirements to protect eligibility\r\n1. Consider notifying and involving law enforcement. TODO: Link the following bullets to actual resources for your organization\r\n    1. [Local law enforcement](#TODO-link-to-actual-resource)\r\n    1. [State or regional law enforcement](#TODO-link-to-actual-resource)\r\n    1. [Federal or national law enforcement](#TODO-link-to-actual-resource)\r\n1. Communicate with security and IT vendors TODO: Link the following bullets to actual resources for your organization\r\n    1. Notify and collaborate with [managed providers](#TODO-link-to-actual-resource) per procedure\r\n    1. Notify and collaborate with [incident response consultants](#TODO-link-to-actual-resource) per procedure\r\n\r\n### Resources\r\n\r\n#### Reference: User Actions for Suspected Defacement Attack\r\n\r\n`TODO: Customize steps for users dealing with suspected defacement`\r\n\r\n1. Stay calm, take a deep breath.\r\n1. Disconnect your system from the network `TODO: include detailed steps with screenshots, a pre-installed tool or script to make this easy ("break in case of emergency"), consider hardware network cut-off switches`\r\n1. Take pictures of the page you see using your smartphone showing the things you noticed: the defacement message and any other changes to the usual site.\r\n1. Take notes about the problem(s) using the voice memo app on your smartphone or pen-and-paper.  Every little bit helps!  Document the following:\r\n    1. What did you notice?\r\n    1. When did it first occur, and how often since?\r\n    1. What data do you typically access?\r\n    1. Who else have you contacted about this incident, and what did you tell them?\r\n1. Contact the [help desk](#TODO-link-to-actual-resource) and be as helpful as possible.\r\n1. Be patient: allow the IT personnel get it under control, you may be protecting others from harm!  **Thank you.**\r\n\r\n#### Reference: Help Desk Actions for Suspected Defacement Attack\r\n\r\n`TODO: Customize steps for help desk personnel dealing with suspected defacement`\r\n\r\n1. Stay calm, take a deep breath.\r\n1. Open a ticket to document the incident, per procedure. `TODO: Customize template with key questions (see below) and follow-on workflow`\r\n1. Use your best judgement on which steps to prioritize (i.e. if the defacement left harmful or triggerring content, prioritize taking down the server immediately).\r\n1. Ask the user to take pictures of their screen using their smartphone showing the things they noticed.\r\n1. Take notes about the problem(s) using the voice memo app on your smartphone or pen-and-paper.  If this is a user report, ask detailed questions, including:\r\n       1. What did you notice?\r\n    1. When did it first occur, and how often since?\r\n    1. What data do you typically access?\r\n    1. Who else have you contacted about this incident, and what did you tell them?\r\n1. Ask follow-up questions as necessary.  **You are an incident responder, we are counting on you.**\r\n1. Get detailed contact information from the user (home, office, mobile), if applicable.\r\n1. Record all information in the ticket, including hand-written and voice notes.\r\n1. Quarantine affected users and systems. `TODO: Customize containment steps, automate as much as possible`\r\n1. Contact the [security team](#TODO-link-to-actual-resource) and stand by to participate in the response as directed: investigation, remediation, communication, and recovery.\r\n\r\n#### Additional Information\r\n1. <a name="defacement-playbook-ref-1"></a>A helpful and detailed [paper](https://pdfs.semanticscholar.org/899e/2d629e06d920b9059edb21fcb52cdb33f783.pdf) on defacement detection\r\n2. <a name="defacement-playbook-ref-2"></a>10 tools for [better website monitoring and security](https://geekflare.com/website-defacement-monitoring/)\r\n3. <a name="defacement-playbook-ref-3"></a>[2019 Website Threat Research Report](https://sucuri.net/reports/2019-hacked-website-report/) with helpful statistics\r\n4. <a name="defacement-playbook-ref-4"></a>[Article](https://www.imperva.com/learn/application-security/website-defacement-attack/) including DIYs and Best practices to prevent website defacement'

const JumbotronSection = () => (
  <Jumbotron fluid className="jumboBackground">
    <Container>
      <h1 className="medText">Playbooks</h1>
    </Container>
  </Jumbotron>
)

class PrimaryBodySection extends React.Component {
  render() {
    return (
      <Container>
        <p>
          In addition to the Incident Reponse plan generator, we provide some
          specialized playbooks for common attack types. See the full list
          below.
        </p>
        <a id="webDefaceMD" download="Web Defacement Playbook">
          <Button>Web Defacement Markdown</Button>
        </a>
        <a id="webDefaceHTML" download="Web Defacement Playbook">
          <Button>Web Defacement HTML</Button>
        </a>
        <a id="webDefaceWORD" download="Web Defacement Playbook">
          <Button>Web Defacement Word</Button>
        </a>
      </Container>
    )
  }
}

function updateLink(content, contentType, filename, idLocation) {
  const newBlob = new Blob([content], { type: contentType })
  const newURL = window.URL.createObjectURL(newBlob)
  document.getElementById(idLocation).href = newURL
  document.getElementById(idLocation).download = filename
}

function updateWordLink(blob, filename, idLocation) {
  const newURL = window.URL.createObjectURL(blob)
  document.getElementById(idLocation).href = newURL
  document.getElementById(idLocation).download = filename
}

class PlaybookPage extends React.Component {
  componentDidMount() {
    updateLink(
      webDeface,
      "text/plain",
      "Web Defacement Playbook",
      "webDefaceMD"
    )
    const htmlPreview = marked(webDeface)
    updateLink(
      htmlPreview,
      "text/html",
      "Web Defacement Playbook",
      "webDefaceHTML"
    )
    const docxPreview =
      "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Report</title></head><body>" +
      htmlPreview +
      "</body></html>"
    asBlob(docxPreview).then(data => {
      updateWordLink(data, "Web Defacement Playbook", "webDefaceWORD")
    })
  }

  render() {
    return (
      <Layout>
        <SEO title="Playbooks" />
        <JumbotronSection />
        <PrimaryBodySection />
      </Layout>
    )
  }
}

export default PlaybookPage
