import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/MainNavbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar title="Grreeen" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
