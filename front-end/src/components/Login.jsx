import React from 'react'
import styled from 'styled-components'
import Input from './Input'

const Login = () => {
  return (
    <Container>
        <div className='box'>
               <h2>Management login</h2>
               <div className='form'>
                    <Input  type="text" label="USerID" name="UserID"/>
                    <Input type="password" label="Password" name="PassWord"/>
               </div>
              <div className='options'>
                <a href="#">Forget Password..?</a>  
                <button>Login</button>
              </div>
        </div>
    </Container>
  )
}
export default Login

const Container = styled.div`
     height: calc(100vh - 100px);
     display: flex;
     justify-content: center;
     align-items: center;
     text-align: center;
    
     .box{
        height:calc(100vh - 322px) ;
        width: 33% ;
        border: 1px solid black;
        border-radius: 10px;
        h2{
          margin: 10px auto;
        }
     }
     .form{
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       gap: 50px;
       position:relative;
       margin: 25px auto;
     }
     .options{
       display: flex;
       align-items: flex-end;
       justify-content: space-around;
       gap: 10vw;
       position: relative;
       top: 2vh;
     }  
`;