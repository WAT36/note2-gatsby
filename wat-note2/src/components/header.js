import * as React from "react"
import { Link } from "gatsby"

const Header = ({ title }) => {
    return (
        <header className="global-header white-text">
            <Link className="header-link-home white-text" to="/">
                {title}
            </Link> 
            <span className="right-placed">
                <Link className="header-link-home white-text" to="/blog_top">
                    Blog
                </Link>
            </span>
        </header>
    )
}

export default Header