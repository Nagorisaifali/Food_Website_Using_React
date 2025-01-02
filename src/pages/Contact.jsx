import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box ,  Paper ,  Table,  TableBody,  TableCell,  TableContainer,  TableHead,  TableRow,  Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{ my: 5 , ml : 10 , "& h4 " : { fontWeight : "bold" , mb : 2}}}>
        <Typography variant='h4'>
          Contact My Resturant 
        </Typography>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea asperiores laboriosam inventore delectus, minus quaerat quo repellendus voluptate impedit quasi veniam natus ipsum, soluta illum.</p>
      </Box>

      <Box sx={{ m:3 , width:"600px" , ml: 10 , "@media (max-width:600px)" : {width:"300px"} }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ bgcolor:'black' , color:"white" }} align='center'>
                  Cntact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                    <SupportAgentIcon sx={{ color : "red" , pt : 1}}/>1000-00-0000 (Tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                  <TableCell>
                    <MailIcon sx={{ color : "skyblue" , pt : 1}}/>help@myrest.com
                  </TableCell>
              </TableRow>

              <TableRow>
                  <TableCell>
                    <CallIcon sx={{ color : "green" , pt : 1}}/> 1234567890
                  </TableCell>
              </TableRow>

            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </Layout>
  )
}

export default Contact
