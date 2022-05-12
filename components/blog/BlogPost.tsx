import * as React from 'react'
import NextLink from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

type Props = {
  title: string
  image: string
  excerpt: string
  date: string
  slug: string
}

export default function BlogPost({ title, image, excerpt, date, slug }: Props) {
  return (
    <Card sx={{ width: 300 }}>
      <NextLink href={`/blog/${slug}`} passHref>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={`Cover image for ${title}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.primary"
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
              }}
            >
              {excerpt}
            </Typography>
            <Typography variant="caption" color="text.primary">
              {date}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  )
}
