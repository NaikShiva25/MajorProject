import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard({request}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
        <Typography variant="h5" component="div">
        Guest Name :- {request.name}
        </Typography>
        <Typography sx={{ fontSize: 14}} color="text.primary">
          Mobile No :- {request.mobileno}
        </Typography>
        <Typography sx={{ fontSize: 14}} color="text.primary">
          Student Roll No :- {request.rollno}
        </Typography>
        <Typography variant="body2">
          Arrival :- {(request.fromDate).toString()}    <br />
          Departure :- {request.toDate}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.primary" gutterBottom>
             Rooms Required :- {request.noOfRoomsRequired}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Verify</Button>
      </CardActions>
    </Card>
  );
}