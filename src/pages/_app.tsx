import Head from "next/head";
import { useEffect, useState } from "react";


import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
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
    <Head>
      <title>Rick And Morty</title>
    </Head>
    <Header toggleTheme={toggleTheme} />
    <GlobalStyle />
    {isMounted && <Component {...pageProps} />}
  </ThemeProvider>

  )
}

export default App
