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
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        //rejected:true,        // 削除されたCSSの容量を表示 
        //printRejected: false,  // 削除したCSSを最大100個まで一覧表示
        //printAll: false,       // 削除したCSSを全て一覧表示 
        //develop: false,        // 開発環境でbuildした時もCSSを削除
        tailwind: true,       // TailwindCSS使用時はTrue default: false
        //whitelist: ['selector'], // 削除しないCSSを指定 default: []
        ignore: ['/style/layout.css', '/style/post.css', 'docsearch.js/'], // 削除しないファイルを指定 default: []
        // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // 指定したファイルのCSSのみを削除 default: []
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
