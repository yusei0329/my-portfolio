import React from "react";
import Layout from "../components/layout"
import Hero from "../components/hero"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <>
      <Layout>
        <Hero />
        <div className="contents">
          {data.allMarkdownRemark.nodes.map(node => (
            <div key={node.id}>
              <div className="post-link">
                <Link to={node.fields.slug}>
                  <Img className="post-link-image"
                    fluid={node.frontmatter.topImage.childImageSharp.fluid}
                    alt="cover"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  {
    allMarkdownRemark {
      nodes {
        html
        fields {
          slug
        }
        frontmatter {
          title
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
  }
`