import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Constants from "../common/constants"

import "katex/dist/katex.min.css"

const NoteDirTemplate = ({ data, location }) => {
  const posts = data.allDirectory.nodes
  const mds = data.allMarkdownRemark.nodes
  const siteTitle = data.site.siteMetadata?.title || `Title`
  // const { previous, next } = data


  if (posts.length === 0 && mds.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="notes" />
        <Bio />
        <p>
          こちらにまだ記事はありません.
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
          const title = Constants.noteDirName[post.name] || post.name

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
      <ol style={{ listStyle: `none` }}>
        {mds.map(md => {
          const title = md.frontmatter.title || md.fields.slug

          return (
            <li key={md.fields.slug}>
              <article
                className="post-list-item"
                itemScope
                itemType="http://schema.org/Article"
              >
                <header>
                  <h2>
                    <Link to={md.fields.slug} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </h2>
                  <small>{md.frontmatter.date}</small>
                </header>
                <section>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: md.frontmatter.description || md.excerpt,
                    }}
                    itemProp="description"
                  />
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
    $markdownRegexPath: String
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
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: $markdownRegexPath}}, sort: { fields: [frontmatter___date], order: ASC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
