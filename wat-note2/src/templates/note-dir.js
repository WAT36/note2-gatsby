import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NoteDirTemplate = ({ data, location }) => {
  const posts = data.allDirectory.nodes
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const { previous, next } = data


  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="notes" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <h1 className="main-heading">Notes</h1>
      <Seo title="notes" />
      <Bio />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.name

          return (
            <li key={post.name}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={"/notes/" + post.relativePath} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  {/* <small>{post.frontmatter.date}</small> */}
                </header>
                <section>
                  {/* <p
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  /> */}
                </section>
              </article>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default NoteDirTemplate

export const pageQuery = graphql`
  query NoteDirBySlug(
    $absolutePath: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    allDirectory(filter: {dir: { eq: $absolutePath }}) {
      nodes {
        absolutePath
        id
        relativePath
        dir
        name
      }
    }
  }
`
