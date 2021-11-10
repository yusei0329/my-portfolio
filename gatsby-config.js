/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "YUSEI NIWA",
    author: "Works",
    user: { name: "Yusei Niwa", email: "nwys.28@gmail.com", github: "https://github.com/yusei0329"
  },
},
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaultQuality: 100,
        quality: 100,
        pngQuality: 100,
        jpegQuality: 100,
      },
    },
      `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
