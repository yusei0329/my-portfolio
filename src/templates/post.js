import React from "react"
import { graphql } from "gatsby"
import WorksLayout from "../components/works-layout"
import Img from "gatsby-image"
import "../styles/post.css"

export default function Post({ data }) {
  return (
    <WorksLayout>
      <div className="post-header">
        <h1>{data.markdownRemark.frontmatter.title}</h1>
      </div>
      <Img className="post-image"
        fluid={data.markdownRemark.frontmatter.topImage.childImageSharp.fluid}
        alt="cover"
      />
      <div className="post-body" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    </WorksLayout>
  )
}

export const query = graphql`
query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
      title
      topImage {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
}
`