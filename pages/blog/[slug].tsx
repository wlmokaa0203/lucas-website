import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Layout from '../../components/Layout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from 'next'
import { Post } from '.'
import { ParsedUrlQuery } from 'querystring'

type Props = Post

type Params = ParsedUrlQuery & {
  slug: string
}

const BlogPostPage: NextPage<Props> = ({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) => {
  return (
    <Layout
      title="Blog"
      description="This is the blog posts for my programming life"
    >
      <Container maxWidth="lg" sx={{ position: 'relative', pt: 10 }}>
        <Box sx={{ width: '100%' }}>
          <Link href={'/blog'} passHref>
            <Button>Go back</Button>
          </Link>
        </Box>
        <Typography>{title}</Typography>
        {content && (
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        )}
      </Container>
    </Layout>
  )
}

export default BlogPostPage

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = (
  context
): GetStaticPropsResult<Props> => {
  const params = context.params!
  const { slug } = params

  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )
  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
