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
      <p>本ブログにおける免責事項は、下記の通りです。</p>

      <h2>本ブログの情報の正確性について</h2>
      <p>
        本ブログのコンテンツや情報において、可能な限り正確な情報を掲載するよう努めています。
        しかし、誤情報が入り込んだり、情報が古くなったりすることもあります。
        必ずしも正確性を保証するものではありません。また合法性や安全性なども保証致しません。
        ご参考の際は自己責任でお願いします。
      </p>

      <h2>損害等の責任について</h2>
      <p>
        本ブログに掲載された内容によって生じた損害等の一切の責任を負いかねますので、ご了承ください。
        また本ブログからリンクやバナーなどによって他のサイトに移動された場合、移動先サイトで提供される情報、サービス等について一切の責任も負いません。
        本ブログを利用する場合は、自己責任で行う必要があります。
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
