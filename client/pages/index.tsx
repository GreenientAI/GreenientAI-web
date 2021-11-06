import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Grreeen</title>
        <meta name="description" content="Home page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Container>
        <div className="d-flex justify-content-center mt-5">
          <Button variant="outline-primary" size="lg" className="mx-auto">Start simulation</Button>
        </div>
      </Container>
    </div>
  )
}

export default Home
