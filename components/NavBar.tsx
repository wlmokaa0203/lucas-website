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
  useMediaQuery,
} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { breakpoints } from '../utils/styles'

export default function NavBar() {
  const router = useRouter()
  const matchM = useMediaQuery(breakpoints.mediaQuery.m)

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
          <Box
            sx={{
              justifyContent: 'center',
              position: 'absolute',
              color: 'text.secondary',
              fontFamily: 'Square Peg',
              fontSize: matchM ? 36 : 24,
              left: 20,
            }}
          >
            Lucas{router.pathname.includes('/blog') && "'s Blog"}
          </Box>
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
  const matchM = useMediaQuery(breakpoints.mediaQuery.m)
  const router = useRouter()
  const { pathname } = router

  return (
    <NextLink href={slug} passHref>
      <Link underline="none">
        <Box
          sx={[
            {
              color: 'text.secondary',
              width: matchM ? 100 : 60,
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
