import React from "react"
import { Link } from "gatsby"
import { Flex, Box, Heading } from "rebass"

export default function NextPrevious({ next, previous }) {
  return (
    <Flex flexDirection={["column", "row"]}>
      <Box width={1} mb={[4]}>
        {previous && (
          <>
            <Heading mb={2} fontSize={[3, 4]}>
              Previous
            </Heading>
            <Link to={previous.fields.slug} style={{ textDecoration: `none` }}>
              <Heading fontSize={[3, 4]}>{previous.frontmatter.title}</Heading>
            </Link>
          </>
        )}
      </Box>
      <Box width={1}>
        {next && (
          <>
            <Heading mb={[2]} fontSize={[3, 4]}>
              Next
            </Heading>
            <Link to={next.fields.slug} style={{ textDecoration: `none` }}>
              <Heading fontSize={[3, 4]}>{next.frontmatter.title}</Heading>
            </Link>
          </>
        )}
      </Box>
    </Flex>
  )
}
