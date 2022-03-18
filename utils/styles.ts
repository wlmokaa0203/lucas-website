const styles = {
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
    backgroundColor: 'transparent',
    transition: '1s',
    boxShadow: 'unset',
    '&:hover': {
      backgroundColor: 'primary.light',
      transition: '0.5s',
    },
  },
  appToolBar: {
    justifyContent: 'center',
    fontSize: '20px',
  },
  navLink: {
    color: 'black',
    width: '100px',
    mx: 1,
  },
  //   customComponent: {
  //     // to be used with none MUI components
  //     backgroundColor: theme.palette.primary.main,
  //   },
}
const globalStyles = {
  a: { textDecoration: 'none' },
}

export { styles, globalStyles }
