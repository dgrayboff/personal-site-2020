/* eslint-disable */
module.exports = {
  siteMetadata: {
    title: `David Grayboff`,
    description: `David Grayboff. Front-End Web Developer. Software Engineer. Raleigh, North Carolina.`,
    author: `@DavidGrayboff`,
    about1: `I live in Raleigh, North Carolina.` ,
    about2: `I "hack" websites. Legally. With permission.`,
    about3: `I'm a web developer with extensive experience building UI modules that run on top of enterprise-level web applications as testing campaigns. I enjoy creating optimized user experiences through front-end technologies.`
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/profpic_stripes_bw.jpg`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
