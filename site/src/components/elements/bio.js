import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { navigate } from "gatsby"

import { Button } from "../styles"
import { useAvatarImage } from "../hooks"

const StyledBio = styled.div`
  margin-top: 10rem;

  img {
    border-radius: 50%;
  }

  .bio-text {
    margin: 6rem 0 4rem 0;
  }

  .github-btn {
    margin-right: 1rem;
  }
`

export default function Bio() {
  const { fixed } = useAvatarImage()

  return (
    <StyledBio>
      <Img fixed={fixed} />
      <div className="bio-text">
        <h1>Hi, I'm Tanner.</h1>
        <h3>
          I make things for the web.{" "}
          <a href="https://www.youtube.com/watch?v=CMNry4PE93Y">
            I like turtles,
          </a>{" "}
          and JavaScript.
        </h3>
      </div>
      <a href="http://www.github.com/tannergaucher">
        <Button className="github-btn">Github</Button>
      </a>
      <Button primary onClick={() => navigate(`/contact`)}>
        Contact Me
      </Button>
    </StyledBio>
  )
}
