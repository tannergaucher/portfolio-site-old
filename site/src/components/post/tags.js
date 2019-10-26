import React from "react"
import styled from "styled-components"
import { space } from "styled-system"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import { Flex, Heading } from "rebass"

const Styled = styled.div`
  ${space};
`

export default function Tags({ tags }) {
  return (
    <Styled>
      <Flex>
        {tags.map(tag => (
          <Link
            to={`/tags/${kebabCase(tag)}`}
            key={tag}
            style={{ textDecoration: "none" }}
          >
            <Heading
              mr={[3]}
              fontWeight="lighter"
              style={{
                textTransform: `uppercase`,
                letterSpacing: `.03rem`,
              }}
              fontSize={[3, 4]}
            >
              #{tag}
            </Heading>
          </Link>
        ))}
      </Flex>
    </Styled>
  )
}
