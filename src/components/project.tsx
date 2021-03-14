import * as React from 'react'
import styled from '@emotion/styled'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Layout, SEO, Contact } from 'components'
import { HeadingMain, HeadingWrapCont, ProjectLink } from 'styles'
import { ProjectData } from 'types'

const LinkRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  padding: 20px;
`

function Project(props: ProjectData) {
  const { title, description, url, tags, repository } = props
  const image = getImage(props.image) as IGatsbyImageData
  return (
    <Layout>
      <SEO title={title} description={description} />
      <HeadingWrapCont>
        <HeadingMain>
          <span>{title}</span>
          <br />
          <br />
        </HeadingMain>
      </HeadingWrapCont>
      <GatsbyImage image={image} alt={title} />
      <LinkRow>
        <a href={url}>
          <ProjectLink>
            Live <span>&#8250;</span>
          </ProjectLink>
        </a>
        <a href={repository}>
          <ProjectLink>
            Code <span>&#8250;</span>
          </ProjectLink>
        </a>
      </LinkRow>
      <p>{description}</p>
      <ul>
        {tags.map((tag: string) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <p>Build by: Davy Hausser</p>
      <Contact />
    </Layout>
  )
}

export default Project
