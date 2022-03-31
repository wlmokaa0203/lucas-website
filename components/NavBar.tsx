import React from 'react'
import { AppBar, Toolbar, Box, Link } from '@mui/material'
import { useRouter } from 'next/router'
import NextLink from 'next/link'

import { styles } from '../utils/styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function NavBar() {
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

  return (
    <AppBar sx={styles.appBar} position="static">
      <Toolbar sx={styles.appToolBar}>
        <Box sx={styles.logo}>
          <div onClick={() => handleClickLink('/')}>Lucas</div>
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
    </AppBar>
  )
}

type NavLinkProps = {
  name: string
  slug: string
  isActive: boolean
}

function NavLink({ name, slug, isActive }: NavLinkProps) {
  return (
    <NextLink href={slug} passHref>
      <Link
        underline="none"
        sx={[styles.navLink, isActive && { fontWeight: 'bold' }]}
      >
        {name}
      </Link>
    </NextLink>
  )
}
