import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { MenuArray } from './MenuArray';
import Logo from '../../../assets/img/restoreIt_logo.png';
import Img from '../../atoms/img/Img';
import Text from '../../atoms/text/Text';

const drawerWidth = 240;

const TopBar = ({ window, id }) => {

    const [mobileOpen, setMobileOpen] = useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          <Img url={Logo} stl='height-50'/>
        </Typography>
        <Divider />
        <List>
          {MenuArray.filter(item => item.id === id).map((data) => 
            data.tabs.map((info, index) => { 
              return(           
                <ListItem key={index} disablePadding>
                  <ListItemButton sx={{ textAlign: 'center' }}>
                    <ListItemText primary={info.name} />
                  </ListItemButton>
                </ListItem>
              )
          }))}

            
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  

    return (
        <>
            <AppBar component="nav" sx={{ paddingLeft: {  xs: '1rem', md: '7rem' },  paddingRight: {  xs: '1rem', md: '7rem' } }}>
              <Toolbar className='bg-primary'>
                  <IconButton
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}
                  >
                    <MenuIcon color='#000'/>
                  </IconButton>

                  <Box
                  sx={{ flexGrow: 1, alignItems: 'flex-end', mr: 2, display: {  xs: 'none', md: 'flex' } }} >
                    <Img url={Logo} stl='height-50'/>
                    <Text txt='RESTORE IT' stl='ml-1 txt-primary large font-title'/>
                  </Box>

                  {MenuArray.filter(item => item.id === id).map((data) => 
                    data.tabs.map((info, index) => {
                      return (
                        <Box sx={{ display: { xs: 'none', md: 'block' }}} key={index}>
                            <div className='py-05 txt-action pointer normal-size uppercase txt-center' style={{width: '120px', position: 'relative', top: '10px'}}>
                              <Typography
                              className='txt-primary font-title-medium'
                              >
                              {info.name}
                              </Typography>
                            </div>
                        </Box>
                      )
                  }))}

              </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
          </>
    );
};

export default TopBar;