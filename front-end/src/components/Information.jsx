import React from "react";
import styled from "styled-components";

import { TbAirConditioning } from "react-icons/tb";
import { FaWifi } from "react-icons/fa6";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { FaGlassWater } from "react-icons/fa6";
import { ImPowerCord } from "react-icons/im";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { BiCctv } from "react-icons/bi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { BiFridge } from "react-icons/bi";

const Information = () => {
  return (
     <Container>
        <div className='title'>
               <h1>Aminities</h1>
               <h1>Details</h1>
               <h1>Description</h1>
        </div>
    <div className='subcontainer'>
        <div className='column1'>
            <ul>
            <li> <TbAirConditioning className='icon'/> Air Conditioner</li>
            <li> <FaWifi className='icon'/> Free-Wifi </li>
            <li><BiFridge  className='icon'/> Refrigerator</li>
            <li><PiTelevisionSimpleDuotone className='icon' /> TV</li>
            <li> <FaGlassWater className='icon' /> Geyser</li>
            <li> <ImPowerCord className='icon'/> Power Backup</li>
            <li> <FaHandHoldingMedical className='icon'/> 24/7 Medical support</li>
            <li> <BiCctv className='icon'/> CCTV Cameras</li>
            <li> <MdOutlineVerifiedUser className='icon'/> Attached Bathroom</li>
            <li> <MdOutlineVerifiedUser className='icon'/> Fire Extinguisher </li>
            <li> <MdOutlineVerifiedUser className='icon'/> Well-Maintained & Hygenic</li>
            </ul>
        </div>

       <div className='column2'>
             <div className='details'>
               <ul className='price-container'>
               <li><div className='price'><h3>Article</h3><h3>Rates</h3></div></li>
                   <li><div className='price'><p>Accomodation</p><p>Rs.500/-</p></div></li>
                   <li><div className='price'><p>Breakfast</p><p>Rs.60/-</p></div></li>
                   <li><div className='price'><p>Lunch/Dinner</p><p>Rs.100/-</p></div></li>

               </ul>
                <ul className='list'>
                  
                    <li>
                     <h3 className='tag'>Break-Fast:</h3>
                           <p>Cornflakes, Milk(200 ml) with Paratha with Butter/Curd or Omlet(2 eggs) with Bread and Tea/Coffee</p>
                    </li>
                    <li>
                     <h3 className='tag'>Lunch/Dinner:</h3>
                     <p>Soup, Dal Makhani, Mix Vegitable, Raita(curd), Pulav, Paneer Sabji, Salad, Papar, Chapati/Parathas, Sweet Dish.</p>
                    </li>
                    <li>
                      <h4>General Guidelines:</h4>
                     <ul>
                           <li>The Checkout time of rooms will be 12.00.noon</li> 
                           <li>Stay during the day may be allowed subject to availability of rooms. One day’s room rent will be charged and no advance reservation will be made for such stays.</li>
                           <li>The Guest House will not be used for marriage purposes. Only guests may stay in the rooms.</li>
                           <li>Only Institute programmers and functions will be held in the Guest House.</li>
                           <li>The Dinning-cum-Drawing Hall will not be allowed for private purposes except with special prior written approval of the Director.</li>
                           <li>Consumption of Narcotics/Alcoholic drinks is strictly prohibited.</li>
 
                     </ul>
                    </li>
                   
                </ul>
             </div>
             
       </div>
       <div className='column3'>
         <ul>
        <li>The Institute has a guest house within the campus. It is just a short stroll away from the main gate, the primary entry to the Institute, the rooms of the Guest House are flanked by green lawns. It is housed in an imposing double-storeyed building and located in a central place. It has altogether 27 rooms including 02 VVIP and 05 VIP rooms. All the rooms have double beds and other amenities such as telephone, computer system with internet connection, small refrigerator, geyser and cable connection with LCD TV. VIPs, Institute guests and invited guests are usually accommodated here.</li>

       <li>The guest house provides boarding and lodging facilities for the Institute guests and Visitors, newly appointed faculty, staff members, parents of the students, delegates and participants attending various Conferences, Seminars, Symposia and Workshops etc. It has 01 VIP and 02 General dining halls. The dining hall provides dining facilities to in-house guests and for important Institute activities. </li>        

     <li> It is operated as a non-profit activity to mainly support the academic and research activity on the campus with a homely atmosphere and ambiance traditionally acclaimed for its environs of hygiene and food of homely relish and richness.</li>
           <li>

           <div className='link'> <h3>For More information</h3>
                <a href="https://nitkkr.ac.in/?page_id=6169#" target='_blank'>Click Here</a></div>


           </li>
           </ul>
       </div>
      </div>
     </Container>
  )
}

export default Information
const Container = styled.div`
   min-height: 100vh;
    width: 100%;
    border-bottom: 1px solid black;
 .title{
     display: flex;
     justify-content: space-around;
 }
 .subcontainer{
    display: flex;
    justify-content: space-evenly;
    padding: 0 0 0 0;
 }
    .column1{
         min-height: 90vh;
         width: 33.3%;
         border-right: 1px solid black;
         ul{
            position: relative;
            top: 10px;
            list-style: none;
            line-height: 50px;
            font-size:16px;
         }
    }
    .column2{
         min-height: 90vh;
         width: 33.3%;
         border-right: 1px solid black;
         font-size: 16px;
         .list{
         position: relative;
         top: 10px;
         font-weight:200;
         line-height: 20px;
         list-style: none;
         display: flex;
         flex-direction: column;
         gap: 20px;
         padding: 0 20px;
         }
         .price{
            display:flex ;
            justify-content: space-between;
         }
         .price-container{
            list-style: none;
            padding: 0 20px;
            line-height: 20px;
         }
    }
    .column3{
      min-height: 90vh;
       width: 33.3%;
       padding: 20px 0px;
       font-size: 16px;
      
      ul{
         font-weight:200;
         line-height: 20px;
         list-style: none;
         display: flex;
         flex-direction: column;
         gap: 20px;
         padding: 0 0 0 20px;
      }  
      .link a{
         display: flex;
         align-items: center;
         justify-content: center;
         position: relative;
         top: 15px;
      }
    }
    .icon{
      position: relative;
      top: 3px;
    }
`;
