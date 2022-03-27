import React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
import { useRouter } from 'next/router'
import { Box } from '@mui/system'
import { styles } from '../utils/styles'

export default function NavBar() {
  const navLinks = [
    { name: 'resume', slug: '/resume' },
    { name: 'blog', slug: '/blog' },
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
            onClick={() => handleClickLink(slug)}
          />
        ))}
      </Toolbar>
    </AppBar>
  )
}

function NavLink({ name, isActive, onClick }: NavLinkProps) {
  return (
    <Button
      sx={styles.navLink}
      variant={isActive ? 'outlined' : 'text'}
      onClick={onClick}
    >
      {name}
    </Button>
  )
}

interface NavLinkProps {
  name: string
  slug: string
  isActive: boolean
  onClick: () => void
}
