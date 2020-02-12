import { Link } from "gatsby"
import React from "react"
import { useSiteMetadata } from "../hooks"

export default function Header({ location }) {
  const isIndexPage = location.pathname === "/"

  return isIndexPage ? <IndexHeader /> : <PlainHeader />
}

function IndexHeader() {
  const { title, description, social } = useSiteMetadata()

  return (
    <header className="container padding">
      <h1 className="site-title text--md">{title}</h1>
      <h2>{description}</h2>
      <nav>
        <a
          className="nav-link"
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
        <a
          className="nav-link"
          href={social.linkedIn}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
      <hr />
    </header>
  )
}

function PlainHeader() {
  const { title } = useSiteMetadata()

  return (
    <header className="header">
      <Link to="/" className="nav-link">
        <h4 className="site-title">{title}</h4>
      </Link>
    </header>
  )
}
