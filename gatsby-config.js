module.exports = {
  pathPrefix: "/IR-Planner",
  siteMetadata: {
    title: `IR Plan Generator`,
    description: `A free Incident Response plan generator for you!`,
    author: `Counteractive`,
    url: "https://www.willrowe.gq",
    image: "/images/counteractive-logo.svg",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/counteractive-logo.svg`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
