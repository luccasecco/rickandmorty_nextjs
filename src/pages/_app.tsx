import { useState } from "react";


import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { GlobalStyle } from "../styles/global";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";

function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(light)
  
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  
  return (
  <ThemeProvider theme={theme}>
    <Header toggleTheme={toggleTheme} />
    <GlobalStyle />
    <Component {...pageProps} />
  </ThemeProvider>

  )
}

export default App
