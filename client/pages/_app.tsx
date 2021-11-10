import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Navbar from '../components/MainNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4000/api/v1';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar title="Grreeen" />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
