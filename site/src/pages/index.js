import { Layout, SEO } from "../components"
import {
  useLatestMyImages,
  useLatestPosts,
  useLatestProjects,
  useSiteMetadata,
} from "../hooks"

import React from "react"
import styled from "styled-components"

export default function IndexPage({ location }) {
  const { title } = useSiteMetadata()

  return (
    <Layout location={location}>
      <SEO title={title} />
      <Posts />
      <Projects />
      <Photos />
      <Contact />
    </Layout>
  )
}

const Posts = () => {
  const { edges } = useLatestPosts()

  return (
    <section>
      {edges.map(edge => (
        <div className="card" key="">
          Post
        </div>
      ))}
    </section>
  )
}

const Projects = () => {
  const { edges } = useLatestProjects()

  return (
    <section>
      {edges.map(edge => (
        <div className="card" key="">
          Project
        </div>
      ))}
    </section>
  )
}

const Photos = () => {
  const { edges } = useLatestMyImages()

  return (
    <section>
      {edges.map(edge => (
        <div className="card" key="">
          Photo
        </div>
      ))}
    </section>
  )
}

const Contact = () => {
  return (
    <div>
      <h2>Contact Me</h2>
      <form
        className="form"
        name="netlify-contact-form"
        method="POST"
        data-netlify="true"
      >
        {/* This hidden input needs to be here for netlify form */}
        <input
          className="input"
          type="hidden"
          name="form-name"
          value="netlify-contact-form"
        />
        <input
          className="input"
          type="email"
          name="contact-form-email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="textarea"
          type="text"
          name="contact-form-message"
          cols="10"
          rows="10"
          placeholder="Message"
          required
        />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  )
}
