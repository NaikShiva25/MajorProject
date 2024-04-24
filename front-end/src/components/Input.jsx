import React from 'react'
import styled from 'styled-components'

const Input = (props) => {
  return (
    <Container>
        <label htmlFor="name">{props.label}</label>
    <input type={props.type} name={props.name}/>
   
    </Container>
  )
}

export default Input
const Container = styled.div`
   position: relative;

   input{
          height: 30px;
           width: 80%;
           padding: 0 8px;
        }
   label{
          position: absolute;
          top: -10px;
          left: 50px;
          background-color: white;
         padding: 0 8px;    
   }

`;