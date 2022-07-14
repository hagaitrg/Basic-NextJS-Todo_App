import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Nav from './components/navigations/nav/nav'
import Footer from './components/footer/footer/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Nav/>
      <Component {...pageProps} />
      <Footer/>
    </Fragment>
  )
}

export default MyApp
