import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import Nav from './components/navigations/nav/nav'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Nav/>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
