import * as React from "react"

import Header from "../components/header"
import ProgrammingLanguageTag from "./programming_language_tag"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div id="all-wrapper" >
      <Header title={title}></Header>
      <div className="programming-language-tagbar">
                <ProgrammingLanguageTag name="test2"></ProgrammingLanguageTag>
      </div>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
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
