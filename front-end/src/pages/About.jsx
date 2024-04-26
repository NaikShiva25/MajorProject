import React from 'react'
import styled from 'styled-components'
import ManagementConsole from '../components/ManagementConsole'

const About = () => {
  return (
    <Container>
       <ManagementConsole/>
    </Container>
  )
}

export default About
const Container = styled.div`
   min-height:75.2vh;
    width: 100%;
`;