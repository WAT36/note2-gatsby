import * as React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Disclaimer = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <h1 className="main-heading">免責事項</h1>
      <Seo title="Disclaimer" />
      <Bio />
      <p>
        作成中・・・
      </p>
    </Layout>
  )

}

export default Disclaimer

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
