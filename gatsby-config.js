require("ts-node").register({ files: true });

module.exports = {
  siteMetadata: {
    title: `Hackville 2021`,
    description: `Come signup for Sheridans 2nd annual, first virtual Hackathon! Lots of fun to be had and lots to learn. Brought to you by Hackademics. Sheridans hackathon club.`,
    author: `@hackademics`,
    url: "https://hackville.io",
    image: "/images/favicon.png",
    twitterUsername: "@hackademicsclub"
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
      resolve: `gatsby-plugin-codegen`,
      options: {}
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Hackville 2021`,
        short_name: `Hackvile is Sheridan Colleges Hackathon, Created by Hackademics`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-typescript`,
    `gatsby-plugin-scss-typescript`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
