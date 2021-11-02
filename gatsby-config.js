/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "YUSEI NIWA",
    author: "Works",
    category: ["Laravel", "Vue.js", "React"],
    user: { name: "Yusei Niwa", email: "nwys.28@gmail.com" 
  },
},
  /* Your site config here */
  plugins: [
      `gatsby-plugin-sharp`,
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
