import React from 'react'
import Navbar from './components/Navbar'
import { Container } from '@mui/material'
import Form from './components/Form'
import ListGroup from './components/ListGroup'

const App = () => {
  return (
    <>
      <Navbar/>
      <Container sx={{padding:"80px 50px"}}>
        <Form/>
        <ListGroup/>
      </Container>
    </>
  )
}

export default App