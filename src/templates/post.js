import React from "react"
import { graphql } from "gatsby"
import WorksLayout from "../components/works-layout"
import { GatsbyImage } from "gatsby-plugin-image";
import "../styles/post.css"

export default function Post({ data }) {
  const link = data.markdownRemark.frontmatter.link;
  return (
    <WorksLayout>
      <div className="post-header">
        <h1>{data.markdownRemark.frontmatter.title}</h1>
      </div>
      <GatsbyImage
        image={data.markdownRemark.frontmatter.topImage.childImageSharp.gatsbyImageData}
        className="post-image"
        alt="cover" 
        />
      <div className="post-body" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      <a href={link}　target="_blank">{data.markdownRemark.frontmatter.link}</a>
    </WorksLayout>
  );
}

export const query = graphql`query ($slug: String!) {
  markdownRemark(fields: {slug: {eq: $slug}}) {
    html
    frontmatter {
      title
      link
      topImage {
        childImageSharp {
          gatsbyImageData(width: 1000, layout: CONSTRAINED)
        }
      }
    }
  }
}
`