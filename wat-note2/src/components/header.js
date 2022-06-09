import * as React from "react"
import { Link } from "gatsby"
import Search from "./search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]

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
                <Link className="header-link-home white-text" to="/notes">
                    Notes
                </Link>
                <Link className="header-link-home white-text" to="/about">
                    About
                </Link>
                <Link className="header-link-home white-text" to="/disclaimer">
                    免責事項
                </Link>
            </span>
        </header>
    )
}

export default Header