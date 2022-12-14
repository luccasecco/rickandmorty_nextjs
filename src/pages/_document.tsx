import { Html, Head, Main, NextScript } from "next/document";

export default function Document(){
  return(
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DynaPuff&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />

        <link rel="shortcut icon" href="favicon.ico" />
       
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}