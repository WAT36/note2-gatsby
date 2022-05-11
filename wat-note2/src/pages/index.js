import * as React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Index = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Index" />
      <Bio />
      <p>
      このページはわたくしWATが日ごろの業務及び業務外等の活動で得た技術的知見を備忘のために書き記しておく事を目的に開設した、個人的なノート代わりのサイトです。 たまに自分で作ったプロダクトや雑品などについても書いていけたら良いなあと思っています。    
      </p>
      <p>
      このページはGithub上で、Gatsbyを使って作成しております。    
      </p>
      <p>
      まあ、よろしく
      </p>

      <Link to="/blog_top">
        <p>ブログ</p>
      </Link>
    </Layout>
  )

}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
