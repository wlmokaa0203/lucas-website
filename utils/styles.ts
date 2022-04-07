const color = {
  white: '#fff',
}

const breakpoints = {
  mediaQuery: {
    xs: '(max-width: 600px)',
    s: '(min-width: 600px)',
    m: '(min-width: 768px)',
    l: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
  },
}

const styles = {
  page: {
    paddingTop: 2,
    minHeight: '80vh',
  },
  fullpage: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  pageTitle: {
    fontWeight: 'bold',
    color: 'primary.main',
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
    // boxShadow: 'unset',
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
      color: 'primary.light',
    },
  },
  logo: {
    color: 'primary.main',
    '&:hover': {
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

export { styles, globalStyles, color, breakpoints }
