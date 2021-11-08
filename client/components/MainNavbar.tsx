import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import Link from 'next/link'
import styles from '../styles/MainNavbar.module.scss'

interface MainNavbarProps {
  title: string
}

const authNavLink = `${styles.navLink} ${styles.auth}`

const MainNavbar: React.FC<MainNavbarProps> = ({ title }) => {
  return (
    <>
      <Navbar variant="dark" style={{backgroundColor: '#112636'}}>
        <Container>
          <Link href="/" passHref={true}>
            <Navbar.Brand href="/" style={{ color: 'lime', fontWeight: 'bold' }}>{title}</Navbar.Brand>
          </Link>
          <Nav className="ms-auto">
            <Nav.Item>
              <Link href="/stocks/view" passHref={true}>
                <Nav.Link className={styles.navLink}>Stocks</Nav.Link>
              </Link>
            </Nav.Item>
            <Link href="/auth/login" passHref={true}>
              <Nav.Link className={authNavLink}>Login</Nav.Link>
            </Link>
            <Link href="/auth/signup" passHref={true}>
              <Nav.Link className={authNavLink}>Sign Up</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;