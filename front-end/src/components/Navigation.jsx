import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components'

const Navigation = () => {
  return (
    <Navbar>
       <div className='wrap'>
        <div className='logo'>
        <Link to="/"><img src="/images/NIT KKR.png" alt="" /></Link>
        </div>
        <div className='nav2'>
            <ul>
              <li><NavLink className={({isActive , isPending , isTransitioning} )=> [
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                      ].join(" ")} to="/">Home</NavLink></li>
              <li><NavLink  className={({isActive , isPending, isTransitioning} )=> [
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                      ].join(" ")} to="/about">About Us</NavLink></li>
              <li><NavLink  className={({isActive , isPending, isTransitioning} )=> [
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                      ].join(" ")} to="/management_login">Management Login</NavLink></li>
            </ul>
        </div>
        </div>
    </Navbar>
  );
}

 

export default Navigation;
const Navbar = styled.div`
    height:72px;
    width: 100%;
    position: fixed;
    background-color:#f3e5e5;
    font-weight: 500;
    font-size:1.4vw;
    z-index: 99;
  
   .wrap{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 0 25px;
   }
   img{
      height: 60px;
   }
   .nav2 ul{   
    display: flex;
    list-style: none;
    gap: 25px;
    li a{
      text-decoration: none;
      color: black;
      
    }
    li a.active{
           color: rgb(108, 11, 15);
           //border: 1px solid #6c0b0f;
          // padding: 5px 10px;
          // border-radius: 20px;
          
    }
    li a.transitioning{
      /* color: #6c0b0f;
           border: 1px solid #6c0b0f;
           padding: 5px 10px;
    */
           background-color: aquamarine;
    }

   }
   .nav2 ul book{
     height:30px;
     background-color:#6c0b0f;
     border-radius: 25px;
     padding: 5px 10px;
     border: 0;
     color: whitesmoke;
     cursor: pointer;
   }

`;