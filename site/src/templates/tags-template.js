import React from "react"

import { Layout } from "../components/elements"
import { StyledPage } from "../components/styles"

export default function Tags() {
  return (
    <Layout location={location}>
      <StyledPage>
        {/*  */}

        {/*  */}
      </StyledPage>
    </Layout>
  )
}

export const pageQuery = graphql`
  query POSTS_BY_TAG_QUERY($tag: String!) {
    # get posts from markdown using regex
    # get posts where frontatter tag includes $tag
  }
`
