import * as React from "react"

import Header from "../components/header"
import ProgrammingLanguageTag from "./programming_language_tag"

import Search from "./search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]

const Layout = ({ location, title, children, plang_tags = [] }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div id="all-wrapper" >
      <Header title={title}></Header>
      <div className="programming-language-tagbar">
        { plang_tags.map(tag => (
          <ProgrammingLanguageTag name={tag}></ProgrammingLanguageTag>
        ))}
      </div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <Search indices={searchIndices} />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
      </div>
    </div>
  )
}

export default Layout
