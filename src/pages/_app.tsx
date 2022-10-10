import { useEffect, useState } from "react";

import { Header } from "../components/Header";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(light)
  const [isMounted, setIsMounted] = useState(false)
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  return (
  <ThemeProvider theme={theme}>
    <Header toggleTheme={toggleTheme} />
    <GlobalStyle />
    {isMounted && <Component {...pageProps} />}
  </ThemeProvider>

  )
}

export default App
