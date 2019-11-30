import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import { navigate } from "gatsby"

import { Button } from "../styles"
import { useAvatarImage } from "../hooks"

const StyledBio = styled.div`
  img {
    border-radius: 50%;
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
      </div>
      <br />
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
