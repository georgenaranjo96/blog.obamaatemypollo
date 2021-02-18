import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'
import myFooter from '../components/myFooter'
import Nav from '../components/Nav'
import HeadMeta from '../components/HeadMeta'
import Cards from '../components/Cards'
import HeaderBlog from '../components/Header_Blog'
import Link from 'next/link';

export default function Home() {
  return (
    <Container className="md-container">
      <HeadMeta />
      <Nav />

      <Container>
      <HeaderBlog />
      <hr />
      
        <Container>
          <Row className="justify-content-md-between">
            <Cards
            title='A cli command for your browser~'
            text='starts new projects from your web browser as easy as a cli command'
            link='/post/cli-commands-for-your-browser' />
            <Cards
            title='How to create a twitter bot in nodejs'
            text='Discover & depoy your own twitter bot w/nodejs on a heroku server' />
            <Cards />
            <Cards />
            </Row>
        </Container>
      </Container>
      <myFooter />

      <footer className="cntr-footer">
        <myFooter />
      </footer>
    </Container>
  )
}
