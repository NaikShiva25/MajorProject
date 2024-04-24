import React from 'react'
import styled from 'styled-components'
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineContactSupport } from "react-icons/md";
const Contact = () => {
  return (
    <Container>
      <div className='map'>
        <div><h3> Address: <FaMapMarkerAlt className='icon' color='black'/> </h3></div>
      
       <div className='bag2'>
       <a href='https://www.google.com/maps/dir/nitkkr/' target='_blank'> 
        <h4> National Institute of Technology Kurukshetra-136119,Haryana</h4>
       </a>
       </div>
        
      </div>
      <div className='contacts'>
         <div>
         <h3><MdOutlineContactSupport className='icon' color='black'/>  Contact Us:</h3>
         </div>
          <div className='bag'>
          <h5> Fax : (+91)&nbsp;01744&#8209;238050 ( Officer Incharge );</h5>
           <h5> Sh.Sanjay Mehta:(+91)&nbsp;01744&#8209;233312 ( Supervisor );</h5>     
           <h5> Office :(+91)&nbsp;01744&#8209;233312;</h5>
          </div>
      </div>
    </Container>
  )
}

export default Contact
const Container = styled.div`
   min-height:150px;
   width: 100%;
   background-color: #6c0b0f;
   display: flex;
   justify-content:space-between;
   align-items: center;
   
   .map{
       color: white;
       width: 20%;
       padding: 0px 20px;
      a{
        
        color: white;
        text-decoration: none;
        font-size: large;
        line-height: 25px;
      }

   }
   .contacts{
    padding: 0px 20px;
     text-align: right;
     color: white;
     .bag{
       line-height: 20px;
     }
   }
   .icon {
     position: relative;
     top: 5px;
     
   }
`;
