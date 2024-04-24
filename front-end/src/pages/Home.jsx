import React from 'react'
import Welcome from '../components/Welcome'
import styled from 'styled-components';
import Information from '../components/Information'
import Features from '../components/Features';
import Image from '../components/Image';
import Aminities from '../components/Aminities';
const Home = () => {
  return (
    <Container>
       <Welcome/>
       <Features/> 
     {/* <Information/> */}
       <Image/>
       <Aminities/>
    </Container>
  )
}

export default Home
const Container = styled.div`
      width: 100%;
     
`;