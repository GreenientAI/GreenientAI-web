import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'
import Link from 'next/link'

interface MainNavbarProps {
  title: string
}

const MainNavbar: React.FC<MainNavbarProps> = ({ title }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link href="/" passHref={true}>
            <Navbar.Brand href="/" style={{ color: 'lime', fontWeight: 'bold' }}>{title}</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link href="/stocks/view" passHref={true}>
              <Nav.Link>View Stocks</Nav.Link>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNavbar;