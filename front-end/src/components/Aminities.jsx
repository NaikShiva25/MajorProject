import React from 'react'
import styled from 'styled-components';
import { TbAirConditioning } from "react-icons/tb";
import { FaWifi } from "react-icons/fa6";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { FaGlassWater } from "react-icons/fa6";
import { ImPowerCord } from "react-icons/im";
import { FaHandHoldingMedical } from "react-icons/fa6";
import { BiCctv } from "react-icons/bi";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { BiFridge } from "react-icons/bi";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(Num,name, price) {
    return { Num,name, price };
  }

  const rows = [
    createData(1,'Accomodation (Per Night)', 159),
    createData(2,'Breakfast', 237),
    createData(3,'Lunch', 262),
    createData(4,'Dinner', 305),
   // createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
const Aminities = () => {
  return (
    <Container>
          <div className='column1'>
            <h2>Aminities</h2>
            <div className='cover'>
            <div className='box'> <div><TbAirConditioning className='icon'/> Air Conditioner</div> 
             <div><FaWifi className='icon'/> Free-Wifi</div> 
            <div><BiFridge  className='icon'/> Refrigerator</div></div>
            <div className='box'> <div><PiTelevisionSimpleDuotone className='icon' /> TV</div>
             <div><FaGlassWater className='icon' /> Geyser</div>
             <div><ImPowerCord className='icon'/> Power Backup</div></div>
             <div className='box'> <div><FaHandHoldingMedical className='icon'/> 24/7 Medical support</div>
             <div><BiCctv className='icon'/> CCTV Cameras</div>
             {/* <div></div><MdOutlineVerifiedUser className='icon'/> Fire Extinguisher */}
             <div><MdOutlineVerifiedUser className='icon'/> Well-Maintained & Hygenic</div></div> 
             </div>
        </div>
        <div className='Table'>
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="left">Article</TableCell>
            <TableCell align="right">price&nbsp;(₹)</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Num}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
                {row.Num}
              </TableCell>
              <TableCell  align="left">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              {/* <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    </Container>
  )
}

export default Aminities
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 2vw;
   .column1{
    border-top: 1px solid black;
         //min-height: 90vh;
        // margin: 0 auto;
        // width: 450px;
         padding-bottom: 2vw;
        // border-right: 1px solid black;
        h2{
            //margin: 0 auto;
            text-align: center;
            margin: 2vw 0;
        }
         .cover{
            display: flex;
            justify-content: space-around;
            gap: 3vw;
            /* font-size: 1.3vw;
            list-style:none;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: left;
            
            gap: 15px;
            flex-wrap: wrap;
         } */
        }
        .box{
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            gap: 2vw;
            font-size: 1.3vw;

        }
        .table{
            position: relative;
            top: 5vh;
        }
    }
`;