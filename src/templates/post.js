import React from "react"
import { graphql } from "gatsby"
import PagesLayout from "../components/pages-layout"
import Img from "gatsby-image"
import "../styles/post.css"

export default function Post({ data }) {
  // const link = data.markdownRemark.frontmatter.link;
  return (
    <PagesLayout title={data.markdownRemark.frontmatter.title}>
      <div className="main-post">
        {/* <div className="post-header">
          <h1>{data.markdownRemark.frontmatter.title}</h1>
        </div> */}
        <div className="post-content">
          <Img className="post-image"
            fluid={data.markdownRemark.frontmatter.topImage.childImageSharp.fluid}
            alt="cover"
          />
          <div className="post-body" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          {/* <div className="post-document">
            <p>使用技術<br />{data.markdownRemark.frontmatter.skills}</p>
          </div> */}
        </div>
      </div>
    </PagesLayout>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      link
      skills
      topImage {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`