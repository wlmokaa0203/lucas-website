import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Box,
  Link,
  Typography,
  useScrollTrigger,
  Slide,
  useMediaQuery,
  IconButton,
  SwipeableDrawer,
  List,
  ListItem,
} from '@mui/material'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'

import { breakpoints, styles } from '../utils/styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

interface Props {
  window?: () => Window
  children: React.ReactElement
}

export default function NavBar() {
  const [show, setShow] = useState<boolean>(false)

  const navLinks = [
    { name: 'About', slug: '/about' },
    { name: 'My Skills', slug: '/my-skills' },
    { name: 'Showcase', slug: '/showcase' },
    { name: 'Contact', slug: '/contact' },
    { name: 'Blog', slug: '/blog' },
  ]
  const router = useRouter()
  const handleClickLink = (slug: string) => {
    router.push(slug)
  }

  const matchM = useMediaQuery(breakpoints.mediaQuery.m)

  return (
    <HideOnScroll>
      <AppBar sx={styles.appBar} position="sticky">
        {matchM ? (
          <Toolbar sx={styles.appToolBar}>
            <Box sx={[styles.logo, { position: 'absolute', left: 20 }]}>
              <div onClick={() => handleClickLink('/')}>
                <Typography component="h1" variant="h5">
                  {'<Lucas/>'}
                </Typography>
              </div>
              <Typography textAlign={'center'} component="h1" variant="caption">
                {'Web developer'}
              </Typography>
            </Box>
            {navLinks.map(({ name, slug }) => (
              <NavLink
                key={name}
                name={name}
                slug={slug}
                isActive={router.pathname == slug}
              />
            ))}
            <Box sx={styles.contactLinks}>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/lucas-mok-550111128/"
                rel="noreferrer"
              >
                <LinkedInIcon />
              </a>
            </Box>
          </Toolbar>
        ) : (
          <Toolbar sx={[styles.appToolBar, { justifyContent: 'center' }]}>
            <IconButton
              sx={{ position: 'absolute', left: 20 }}
              aria-label="menu"
              onClick={() => setShow(true)}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={[styles.logo, { textAlign: 'center' }]}>
              <div onClick={() => handleClickLink('/')}>
                <Typography component="h1" variant="h5">
                  {'<Lucas/>'}
                </Typography>
              </div>
            </Box>
            <SwipeableDrawer
              anchor={'left'}
              open={show}
              onClose={() => setShow(false)}
              onOpen={() => setShow(true)}
            >
              <List sx={{ width: matchM ? 200 : '100vw' }}>
                <div
                  onClick={() => {
                    handleClickLink('/')
                    setShow(false)
                  }}
                >
                  <Box sx={[styles.logo, { padding: 2 }]}>
                    <Typography
                      textAlign={'center'}
                      component="h1"
                      variant="h5"
                    >
                      {'<Lucas/>'}
                    </Typography>
                    <Typography
                      textAlign={'center'}
                      component="h1"
                      variant="caption"
                    >
                      {'Web developer'}
                    </Typography>
                  </Box>
                </div>
                {navLinks.map(({ name, slug }) => (
                  <ListItem
                    key={slug}
                    sx={{
                      justifyContent: 'center',
                    }}
                    onClick={() => setShow(false)}
                  >
                    <NavLink
                      key={name}
                      name={name}
                      slug={slug}
                      variant={'drawer'}
                      isActive={router.pathname == slug}
                    />
                  </ListItem>
                ))}
                <ListItem sx={{ justifyContent: 'center' }}>
                  <Box sx={[styles.contactLinks, { position: 'static' }]}>
                    <a
                      onClick={() => setShow(false)}
                      target="_blank"
                      href="https://www.linkedin.com/in/lucas-mok-550111128/"
                      rel="noreferrer"
                    >
                      <LinkedInIcon />
                    </a>
                  </Box>
                </ListItem>
              </List>
            </SwipeableDrawer>
          </Toolbar>
        )}
      </AppBar>
    </HideOnScroll>
  )
}

type NavLinkProps = {
  name: string
  slug: string
  isActive: boolean
  variant?: string
}

function NavLink({ name, slug, isActive, variant }: NavLinkProps) {
  return (
    <NextLink href={slug} passHref>
      <Link
        underline="none"
        sx={[
          styles.navLink,
          variant == 'drawer' && { fontSize: 18, marginBottom: 2 },
          isActive && { fontWeight: 'bold' },
        ]}
      >
        {name}
      </Link>
    </NextLink>
  )
}

function HideOnScroll(props: Props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}
