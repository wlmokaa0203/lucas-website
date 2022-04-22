const color = {
  white: '#fff',
  dark: '#283340',
  lightGray: '#7E8496',
  navy: '#132257',
  error: '#ff3333',
}

const font = {
  size: {
    header: 24,
    body: 16,
    small: 14,
  },
  borderRadius: 12,
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
  pageCard: {
    height: 'calc(90vh - 64px)',
    overflow: 'auto',
    display: 'flex',
    alignItems: 'center',
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
    fontSize: font.size.small,
    color: 'primary.main',
    borderRadius: font.borderRadius,
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
    right: 25,
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

export { styles, globalStyles, color, breakpoints, font }
