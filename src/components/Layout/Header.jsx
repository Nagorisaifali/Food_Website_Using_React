import React , { useState } from 'react'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import {AppBar , Box, Divider, Drawer, IconButton, Toolbar, Typography  } from '@mui/material'
import { Link , NavLink } from 'react-router-dom'
import '../../styles/HeaderStyles.css'
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

  const [mobileOpen , setMobileOpne] = useState(false) ; 


  const handleDrawerToggle = () => {
    setMobileOpne(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}} >

              <Typography color={'gold'} variant='h6' component="div" sx={{flexGrow:1 , my:2}}>
                <FastfoodIcon/>
                Food Resto
               </Typography>
                <Divider/>
                 <ul className="mobile-navigation">
                    <li>
                      <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/menu'}>Menu</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/about'}>about</NavLink>
                    </li>
                    <li>
                      <NavLink to={'/contact'}>Contact</NavLink>
                    </li>
                  </ul>
              

    </Box>
  )


  return (
    <>
      <Box>
          <AppBar component={'nav'} sx={{bgcolor:"black" }}>
            <Toolbar>
              <IconButton color="inherit" aria-label='open drawer' edge="start" sx={{mr:2, display:{sm : "none"}, }} onClick={handleDrawerToggle}>
                <MenuIcon/>
              </IconButton>
              <Typography color={'gold'} variant='h6' component="div" sx={{flexGrow:1}}>
                <FastfoodIcon/>
                Food Resto
               </Typography>

              <Box sx={{display:{xs:'none' , sm:'block'}}}>
                  <ul className="navigation-menu">
                    <li>
                      <NavLink activeClassName='active' to={'/'}>Home</NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName='active' to={'/menu'}>Menu</NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName='active' to={'/about'}>about</NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName='active' to={'/contact'}>Contact</NavLink>
                    </li>
                  </ul>
              </Box>

            </Toolbar>
          </AppBar>
          <Box component="nav">
              <Drawer variant='temporary' open={mobileOpen} onClick={handleDrawerToggle} sx={{display:{xs:'block' , sm:'none'},
              "& MuiDrawer-paper":{
                boxSizing:"border-box", 
                width:"240px",
              }
            }}>
                  {drawer}
              </Drawer>
          </Box>
          <Box>
          <Toolbar/>
          </Box>
      </Box>
    </>
  )
}

export default Header
