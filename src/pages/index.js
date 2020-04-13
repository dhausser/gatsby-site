import React from "react"
import { graphql } from "gatsby"
import { Box, Text, Heading } from "@chakra-ui/core"

import ProjectCard from "../components/project-card"
import IntagramCard from "../components/instagram-card"
import useInstagram from "../components/instagram"
import CardGrid from "../components/card-grid"
import Card from "../components/card"

export default function Index({ data }) {
  const gramz = useInstagram()
  return (
    <>
      <Box mb="6">
        <Heading mb="4">Showcase</Heading>
        <Text fontSize="xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus earum sapiente, suscipit consequatur animi quam quo
          explicabo adipisci natus vero, dolor quaerat. Et cum distinctio
          provident facere dolorem voluptas non.
        </Text>
      </Box>
      <CardGrid>
        {data.allProjectsJson.edges.map(({ node: project }) => (
          <ProjectCard
            key={project.slug}
            title={project.title}
            description={project.description}
            image={project.image}
            slug={project.slug}
            tags={project.tags}
            url={project.url}
          />
        ))}
        {gramz.map(gram => (
          <a href={gram.url} key={gram.id}>
            <IntagramCard imageUrl={gram.thumbnail} imageAlt={gram.caption} />
          </a>
        ))}
        <Card />
        <Card />
      </CardGrid>
    </>
  )
}

export const allProjectsQuery = graphql`
  query {
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          tags
          url
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
