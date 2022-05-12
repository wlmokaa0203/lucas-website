import { Container, Grid } from '@mui/material'
import { NextPage } from 'next'
import Layout from '../../components/Layout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import BlogPost from '../../components/blog/BlogPost'

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <Layout
      title="Blog"
      description="This is the blog posts for my programming life"
    >
      <Container maxWidth="lg" sx={{ position: 'relative', pt: 10 }}>
        <Grid container spacing={2}>
          {posts.map(
            ({ frontmatter: { title, cover_image, excerpt, date }, slug }) => (
              <Grid item key={`post_${title}_${slug}`}>
                <BlogPost
                  title={title}
                  image={cover_image}
                  excerpt={excerpt}
                  date={date}
                  slug={slug}
                />
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </Layout>
  )
}

export default Blog

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('posts'))
  const posts: Post[] = files.map((filename) => {
    //Create slug
    const slug = filename.replace('.md', '')

    //Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )
    console.log(markdownWithMeta)
    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts,
    },
  }
}

export type Post = {
  slug: string
  frontmatter: {
    [key: string]: string
  }
  content?: string
}

type Props = {
  posts: Post[]
}
