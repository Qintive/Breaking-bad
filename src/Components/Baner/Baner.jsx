import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import Typography from '@mui/joy/Typography';
import brakingBad from '../../assets/brakingBad.mp4'
import CardContent from '@mui/material/CardContent';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import FilterIcon from '@mui/icons-material/Filter';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink } from 'react-router-dom';



const Baner = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='inherit'>
        <Toolbar>
          <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            textAlign='center'
            fontWeight="lg"
          >
            Fan page Breaking Bad
          </Typography>
        </Toolbar>
      </AppBar>
      <p />
      <Card component="li" sx={{ minWidth: 300, minHeight: 500, flexGrow: 1 }}>
        <CardCover>
          <video
            autoPlay
            loop
            muted
          >
            <source
              src={brakingBad}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent sx={{ justifyContent: 'center', gap: 1 }}>
          <Typography
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 1, sm: 1 }}
            textAlign='center'
            fontSize='50px'
          >
            Fan Page Braking Bad
          </Typography>
        </CardContent>
      </Card>
      <p />
      <BottomNavigation>
        <NavLink to='/'>
          <BottomNavigationAction label='Reacent' value='recents' icon={<PersonIcon />} />
        </NavLink>
        <BottomNavigationAction label='Favorites' value='favorites' icon={<FilterIcon />} />
        <BottomNavigationAction label='Nerby' value='nerby' icon={<AutoAwesomeMotionIcon />} />
        <BottomNavigationAction label='Folder' value='folder' icon={<FormatAlignCenterIcon />} />
      </BottomNavigation>
    </Box>
  )
}

export default Baner;