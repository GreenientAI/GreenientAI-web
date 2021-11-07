import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/MainNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar title="Grreeen" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
