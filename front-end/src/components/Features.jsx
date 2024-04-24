import React from 'react'
import styled from 'styled-components'
import { MdOutlineVerifiedUser } from "react-icons/md";
import { FaBed } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";

const Features = () => {
  return (
    <Container>
        <Element>
        <div ><MdOutlineVerifiedUser className='icon'/></div>
        <div><h2>Easy Booking Process</h2>
        <p>Book your guest rooms now in online.</p></div>
        </Element>
        <Element>
        <div ><FaBed className='icon' /></div>
        <div><h2>On-Campus Convenience</h2>
        <p>Experience great comfort and convenience on campus</p></div>
        </Element>
        <Element>
        <div><BsCurrencyRupee className='icon' /></div>
        <div><h2>Competative Prices</h2>
        <p>It is operated as a non-profit activity with a homely atmosphere and ambiance</p></div>
        </Element>
    </Container>
  )
}

export default Features
const Container = styled.div`
 /* text-align: center; */
   display: flex;
   justify-content: space-around;
   margin: 3vw 2.5vw ;
`;
const Element = styled.div`
  width: 30%;
  display: flex;
  gap: 10px;
  .icon{
    font-size: 2.5vw;
    position: relative;
    top: 3px;
  }
`;
