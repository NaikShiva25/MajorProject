import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'
import Contact from './Contact'
import styled from 'styled-components'

const Layout = () => {
  return (
    <>
    <Container>
    <Navigation/>
    <div className='boxmodel'>
    <Outlet/>
    </div>
    <div  className='footer'>
    <Contact/>
    </div>
    </Container>
    </>
  )
}

export default Layout

const Container = styled.div`
   
   .boxmodel{
      
      position: relative;
      top:72px 
   }
   .footer{
      position: relative;
     top: 72px; 
   }
`;