import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Logo from './burger.png'



function ResponsiveAppBar() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#fff" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src={Logo} alt="logo" />
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: '#FF5A5F',
              textDecoration: 'none',
            }}
          >
            GetRecipe
          </Typography>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
