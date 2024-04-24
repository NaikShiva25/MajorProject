import React from 'react'
import styled from 'styled-components'

const Pageend = () => {
  return (
     <Container>
        <div className='logo'> 
        <img src="/images/NIT KKR.png" alt="Nit logo" />
        </div>
        <div className='tag'>
            <h1>NATIONAL INSTITUTE OF TECHNOLOGY <span>KURUKSHETRA</span></h1>
        </div>
        <div className='last'>
              <p><span id='symbol'>Copyright © 2023 National Institute of Technology Kurukshetra. All Rights Reserved.</span></p>
        </div>
     </Container>

  )
}

export default Pageend
const Container = styled.div`
    height:70vh;
    .logo{
        display: flex;
        justify-content: center;
        align-items: center;
        
    }
    .logo img{
        
    }
    .tag{
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 900;
        font-size: 2vw;
        text-align: center;
        color: #6c0b0f;
        padding:0 30px ;
    }
    .last{
        height: 30px;
        background-color: #6c0b0f;
    }
    .last p{
        display: flex;
        justify-content: center;
        color: white;
        padding-top: 5px;
    }
    #symbol{
        font-size: 20px;
    }
`;