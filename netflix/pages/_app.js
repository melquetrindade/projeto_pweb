//import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Head from 'next/head'
import MainContainer from '../componentes/mainContainer'

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@200;400;800&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </Head>
      <Component {...pageProps} />
    </MainContainer>
  )
}

/* 
  <html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@200;400;800&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
*/