const color = {
  white: '#fff',
  black: '#000000',
  gold: '#B29155',
  dark: '#283340',
  mossyGreen: '#A2A99D',
  darkGreen: '#304145',
  gray: '#BAC7CE',
  steelBlue: '#303E4C',
  softGray: '#F1F1F3',
  darkBrown: '#807166',
  brown: '#BAA495',
  lightBrown: '#BAA495',
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

const styles = {}

const globalStyles = {
  html: {
    height: 0,
  },
  body: {
    height: 0,
  },
  a: { textDecoration: 'none' },
}

export { styles, globalStyles, color, breakpoints, font }
