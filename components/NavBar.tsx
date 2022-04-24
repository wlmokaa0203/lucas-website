import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Link,
  Slide,
  Toolbar,
  AppBar,
  useScrollTrigger,
  Box,
} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function NavBar() {
  const pages = [
    {
      label: 'Home',
      slug: '/',
    },
    {
      label: 'Blog',
      slug: '/blog',
    },
  ]

  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar sx={{ justifyContent: 'center', position: 'relative' }}>
          {pages.map((page) => (
            <NavLink key={page.slug} name={page.label} slug={page.slug} />
          ))}
          <Box
            component="a"
            target="_blank"
            href="https://www.linkedin.com/in/lucas-mok-550111128/"
            rel="noreferrer"
            sx={{
              position: 'absolute',
              right: 10,
              color: 'text.secondary',
            }}
          >
            <LinkedInIcon />
          </Box>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

function NavLink({ name, slug }: { name: string; slug: string }) {
  const router = useRouter()
  const { pathname } = router

  return (
    <NextLink href={slug} passHref>
      <Link underline="none">
        <Box
          sx={[
            {
              color: 'text.secondary',
              width: 100,
              display: 'flex',
              justifyContent: 'center',
            },
            pathname.includes(slug) && slug !== '/' && { fontWeight: '700' },
          ]}
        >
          {name}
        </Box>
      </Link>
    </NextLink>
  )
}

function HideOnScroll({ children }: { children: React.ReactElement }) {
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
