import { createGlobalStyle, ThemeProvider } from 'styled-components'
import reset from 'styled-reset'
import '../src/fonts/fonts.css'

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5% !important;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Barlow', sans-serif;
    font-weight: 400;
    font-size: 1.6rem;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`

const theme = {
  colors: {
    primary: '#005776',
    secondary: '#576F7D',
    tertiary: '#004A64',
    accent: '#51E6DF',
    white: '#fff',
    border: '#DBDBDB'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
