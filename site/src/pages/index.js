import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { navigate } from "gatsby"



import { SEO, ContactForm } from "../components/elements"
import { StyledPage } from "../components/styles"
import { PostCard } from "../components/post"
import { ProjectCard } from "../components/project"
import {} from '../components/'
import { Button } from "../components/styles"
import {
  useAvatarImage,
  useLatestPosts,
  useLatestProjects,
  useLatestMyImages,
} from "../components/hooks"

export default function IndexPage() {
  return (
    <StyledPage>
      <SEO title="Home" />
      <Bio />
      <LatestPosts />
      <Projects />
      <LatestPhoto />
      <Contact />
    </StyledPage>
  )
}

const StyledBio = styled.div`
  margin-top: 10rem;

  img {
    border-radius: 50%;
  }

  .bio {
    margin: 6rem 0 4rem 0;
  }

  button {
    margin-right: 1rem;
  }
`

function Bio() {
  const { fixed } = useAvatarImage()

  return (
    <StyledBio>
      <Img fixed={fixed} />
      <div className="bio">
        <h1>Hi, I'm Tanner.</h1>
        <h3>I make things for the web, usually with JavaScript.</h3>
      </div>
      <a href="http://www.github.com/tannergaucher">
        <Button>Github</Button>
      </a>
      <Button primary onClick={() => navigate(`/contact`)}>
        Contact Me
      </Button>
    </StyledBio>
  )
}

const StyledSection = styled.div`
  margin: 10rem 0;

  .section-title {
    margin-bottom: 4rem;
  }

  span {
    margin-right: 1rem;
  }
`

function LatestPosts() {
  const { edges } = useLatestPosts()
  return (
    <StyledSection>
      <h2 className="section-title">
        <span role="img">✍️</span> Latest Posts{" "}
      </h2>
      {edges.map(edge => (
        <PostCard key={edge.node.id} post={edge.node} />
      ))}
      <Button onClick={() => navigate(`/posts`)}>All Posts</Button>
    </StyledSection>
  )
}

function Projects() {
  const { edges } = useLatestProjects()

  return (
    <StyledSection>
      <h2 className="section-title">
        <span role="img">💻</span> Projects
      </h2>
      {edges.map(edge => (
        <ProjectCard key={edge.node.id} project={edge.node} />
      ))}
      <Button onClick={() => navigate(`/projects`)}>All Projects</Button>
    </StyledSection>
  )
}

function LatestPhoto() {
  const { edges } = useLatestMyImages()

  return (
    <StyledSection>
      <h2 className="section-title">
        <span role="img">📷</span> Photo
      </h2>
      {edges.map(edge => (
        // <Img key={edge.node.id} fluid={edge.node.myImage.asset.fluid} />
      ))}
      <Button onClick={() => navigate(`/photo`)}> All Photo</Button>
    </StyledSection>
  )
}

function Contact() {
  return (
    <StyledSection>
      <h2 className="section-title">
        <span role="img">💌</span> Get in Touch
      </h2>
      <ContactForm />
    </StyledSection>
  )
}
