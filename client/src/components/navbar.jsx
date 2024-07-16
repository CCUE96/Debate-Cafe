import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Menu, MenuItem, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Auth from '../utils/auth'

import CreateModal from './debatepage/debatemodal';

let pages = [];

if (Auth.loggedIn()) {
  pages = [...pages, 'Home', 'Create', 'News', 'About', 'Donations', 'Logout'];
} else {
  pages = [...pages, 'About', 'Donations', 'Login'];
}

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false)


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const logout = () => {
    localStorage.removeItem('id_token');
    window.location.href = '/';
  };

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)

  }

 

  return (
    <AppBar position="static" sx={{bgcolor: '#6F5B40'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <span className='pacifico'>Debate Cafe</span>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              
             
                {pages.map((page) => (
                  <MenuItem key={page} onClick={page === 'Logout' ? logout : page === 'Create' ? handleOpenModal : handleCloseNavMenu} sx={{ padding: 0, width: '100%' }}>
                 
                

                    <Button
                      key={page}
                      onClick={handleCloseNavMenu}

                      sx={{ my: 0, color: 'black', display: 'block', width: "100%", height: '100%' }}
                      component={Link}
                      to={page === 'Debates' ? '/home' : page === 'Home' ? '/home' : page === 'News' ? '/search' : page === 'Login' ? '/' : page === 'About' ? '/about' : page === 'Donations' ? 'https://donate.stripe.com/test_9AQ1675Mn5L57fO144' : '#'}
                    >
                      {page}
                    </Button>


                  </MenuItem>
                ))}
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <span className='pacifico'>Debate Cafe</span>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={page === "Logout" ? logout : page === 'Create' ? handleOpenModal : handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
                component={Link}
                to={page === 'Debates' ? '/home' : page === 'Home' ? '/home' : page === 'Error' ? '/error' : page === 'News' ? '/search' : page === 'Login' ? '/' : page === 'About' ? '/about' : page === 'Donations' ? 'https://donate.stripe.com/test_9AQ1675Mn5L57fO144' : '#'}
              >
                {page}
              </Button>
            ))}
          </Box>
          <CreateModal open={modalOpen} handleClose={handleCloseModal} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
