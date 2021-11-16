import React from "react";
import Layout from "../components/layout"
import About from "../components/about.js"
import Hero from "../components/hero"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import "../styles/reset.css"

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
                  <GatsbyImage 
                    image={node.frontmatter.topImage.childImageSharp.gatsbyImageData}
                    className="post-link-image"
                    alt="cover"
                  />
                </Link>
              </div>
            </div>
          ))}
          <About />
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
              gatsbyImageData(
                width: 800, 
                layout: CONSTRAINED),
            }
          }
        }
      }
    }
  }
`