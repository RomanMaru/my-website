module.exports = {
  siteMetadata: {
    title: `Roman Maru`,
    description: `This is my site portflio`,
    author: `Roman Maru`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Roman Maru`,
        short_name: `RM`,
        start_url: `www.romanmaru.com`,
        background_color: `#0a766b`,
        theme_color: `#0a766b`,
        display: `minimal-ui`,
        icon: `src/images/sunglasses (1).svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
