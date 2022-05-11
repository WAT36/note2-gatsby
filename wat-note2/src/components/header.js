import * as React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
    return (
        <header className="global-header">
            <Link className="header-link-home" to="/">
                {title}
            </Link> 
            comp
        </header>
    )
}

export default Header