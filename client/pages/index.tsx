import React, { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button, Container, Row, Col } from 'react-bootstrap'
import tawkTo from '../components/TawkTo'

const Home: NextPage = () => {
  useEffect(() => {
    const tawkToUrl = "https://embed.tawk.to/61885a8e6885f60a50babc80/1fjua3g4e";
    tawkTo(tawkToUrl);
  }, [])

  return (
    <div style={{backgroundColor: '#112636', height: '100vh'}}>
      <Head>
        <title>Grreeen</title>
        <meta name="description" content="Home page" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Container>
        <Col className="d-flex justify-content-center">
          <Row className="mt-5">
            <h1 style={{ color: '#96b4dc', textAlign: 'center' }} className="display-1">Relax and watch the money grow</h1>
            <h4 style={{ color: '#677f9d', textAlign: 'center' }}>Harness the power of AI to automatically make trades</h4>
            <Button variant="outline-primary" size="lg" className="">Simulate</Button>
          </Row>
        </Col>
      </Container>
    </div>
  )
}

export default Home
