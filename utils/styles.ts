const color = {
  white: '#fff',
}

const styles = {
  page: {
    minHeight: '80vh',
  },
  header: {
    backgroundColor: 'primary.main',
    mb: '1.45rem', // margin bottom
  },
  link: {
    color: 'primary.contrastText',
    textDecoration: 'none',
  },
  title: {
    my: 0, // top/bottom margin
    mx: 'auto', // left/right margin
    maxWidth: 960,
    py: '1.45rem', // top/bottom padding
    px: '1.0875rem', // left/right padding
  },
  appBar: {
    background: 'linear-gradient(#FFFFFF, #D9D9D9)',
    transition: '1s',
    boxShadow: 'unset',
  },
  appToolBar: {
    justifyContent: 'center',
    fontSize: '20px',
  },
  navLink: {
    height: '24px',
    width: '80px',
    fontSize: 14,
    color: 'primary.main',
    borderRadius: 20,
    mx: 1,
    textAlign: 'center',
    '&:hover': {
      textShadow: '2px 1px #000',
    },
  },
  logo: {
    position: 'absolute',
    left: 20,
    color: 'primary.main',
    '& :hover': {
      cursor: 'pointer',
    },
  },
  contactLinks: {
    position: 'absolute',
    right: 20,
    '& > a': {
      color: 'primary.main',
      '& :hover': {
        opacity: 0.8,
      },
    },
  },
}
const globalStyles = {
  a: { textDecoration: 'none' },
}

export { styles, globalStyles, color }
