import { Link } from "gatsby"
import React from "react"
import { useSiteMetadata } from "../hooks"

export default function Footer({ location }) {
  const { title } = useSiteMetadata()

  return (
    <footer className="footer">
      <Link to="/" className="nav-link">
        <small className="site-title text--sm">{title}</small>
      </Link>
    </footer>
  )
}
