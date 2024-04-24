import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Button from '@mui/material/Button';

const Image = () => {
  return (
    <Container>
         
         <div className='column3'>
         <ul>
        <li>The Institute has a guest house within the campus. It is just a short stroll away from the main gate, the primary entry to the Institute, the rooms of the Guest House are flanked by green lawns. It is housed in an imposing double-storeyed building and located in a central place. It has altogether 27 rooms including 02 VVIP and 05 VIP rooms. All the rooms have double beds and other amenities such as telephone, computer system with internet connection, small refrigerator, geyser and cable connection with LCD TV. VIPs, Institute guests and invited guests are usually accommodated here.</li>

       <li>The guest house provides boarding and lodging facilities for the Institute guests and Visitors, newly appointed faculty, staff members, parents of the students, delegates and participants attending various Conferences, Seminars, Symposia and Workshops etc. It has 01 VIP and 02 General dining halls. The dining hall provides dining facilities to in-house guests and for important Institute activities. </li>        

     <li> It is operated as a non-profit activity to mainly support the academic and research activity on the campus with a homely atmosphere and ambiance traditionally acclaimed for its environs of hygiene and food of homely relish and richness.</li>
           <li>

           <div className='link'> <h3>For More information</h3>
           {/* <Button variant="outlined">Click Here</Button>  */}
           </div>

           </li>
           </ul>
       </div>
         <div className='kanna'>
         <Box sx={{ width: 500, height: 450, overflowY: 'scroll' }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

         </div>

    </Container>
  )
}
const itemData = [
    {
      img: '/images/g1.jpg',
      title: 'Bed',
    },
    {
      img: '/images/g2.jpg',
      title: 'Books',
    },
    {
      img: '/images/g3.jpg',
      title: 'Sink',
    },
    {
      img: '/images/g4.jpg',
      title: 'Kitchen',
    },
    {
      img: '/images/g5.jpg',
      title: 'Blinds',
    },
    {
      img: '/images/g6.jpg',
      title: 'Chairs',
    },
    {
      img: '/images/g7.jpg',
      title: 'Laptop',
    },
    {
      img: '/images/g8.jpg',
      title: 'Doors',
    },
    {
      img: '/images/g9.jpg',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
      title: 'Storage',
    },
    {
      img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
      title: 'Candle',
    },
    {
      img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
      title: 'Coffee table',
    },
  ];

export default Image
const Container = styled.div`
 display: flex;
 justify-content: space-around;
.column3{
      min-height: 90vh;
       width: 33.3%;
       padding: 20px 0px;
       font-size: 16px;
      
      ul{
        text-align: justify;
         font-weight:200;
         line-height: 20px;
         list-style: none;
         display: flex;
         flex-direction: column;
         gap: 20px;
         padding: 0 0 0 20px;
      }  
      .link Button{
         display: flex;
         align-items: center;
         justify-content: center;
         position: relative;
         top: 15px;
   
      }
    }
    .kanna{
        position: relative;
        top: 2vw;
    }
`;
