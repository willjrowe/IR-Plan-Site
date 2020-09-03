const ghpages = require("gh-pages")

// replace with your repo url
ghpages.publish(
  "public",
  {
    branch: "master",
    repo: "https://github.com/willjrowe/IR-Plan-Site",
  },
  () => {
    console.log("Deploy Complete!")
  }
)
