/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: `David Grayboff`,
    description: `David Grayboff. Front-End Web Developer. Software Engineer. Raleigh, North Carolina.`,
    author: `@DavidGrayboff`,
    about1: `I'm a web developer located in Raleigh, North Carolina. I enjoy creating optimized user experiences through front-end technologies.` ,
    about2: `I "hack" websites. Legally. With permission.`,
    about3: `I've gained a plethora of experience building UI modules that run on top of enterprise-level web applications as optimization testing campaigns.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/profpic_stripes_bw.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto+Mono`,
        ],
        display: `swap`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
