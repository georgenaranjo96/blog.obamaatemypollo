import React from 'react'
import { 
    Container, 
    Row, 
    Card, 
    Button,
 } from 'react-bootstrap';

import Link from 'next/link';

const Cards = ({ title, text, link }) => {
    return (
      <>
<Card className="sml-card">
  <Card.Body>
    <Card.Title> {title} </Card.Title>
    <Card.Text> {text} </Card.Text>

<Button variant="primary" link="http://localhost:3000/{href}">
      More →
    </Button>
  </Card.Body>
</Card>

</>



    )
}

export default Cards
