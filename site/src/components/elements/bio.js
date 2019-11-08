import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { navigate } from "gatsby"

import { Button, Link } from "../styles"
import { useAvatarImage } from "../hooks"

const StyledBio = styled.div`
  margin: var(--lg) 0;

  img {
    border-radius: 50%;
  }

  .bio-text {
    margin: var(--md) 0 var(--md) 0;
  }

  .github-btn {
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    margin-top: var(--sm) 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .bio-text {
      margin: var(--sm) 0 var(--sm) 0;
    }

    .bio-intro,
    .bio-sentence {
      text-align: center;
      padding: 0 1rem;
    }
  }
`

export default function Bio() {
  const { fixed } = useAvatarImage()

  return (
    <StyledBio>
      <Img fixed={fixed} />
      <div className="bio-text">
        <h1 className="bio-intro">Hi, I'm Tanner.</h1>
        <h4 className="bio-sentence">
          I'm a full-stack software developer who makes things for the web.{" "}
          <a href="https://www.youtube.com/watch?v=CMNry4PE93Y">
            I like turtles,
          </a>{" "}
          and JavaScript.
        </h4>

        <h4 className="bio-sentence">
          Here's a{" "}
          <Link>
            post about my self-taught journey into software development.
          </Link>
        </h4>
      </div>
      <div>
        <a
          href="http://www.github.com/tannergaucher"
          style={{ color: `inherit` }}
        >
          <Button className="github-btn">Github</Button>
        </a>
        <Button primary onClick={() => navigate(`/contact`)}>
          Contact Me
        </Button>
      </div>
    </StyledBio>
  )
}
