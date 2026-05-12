import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import ListItemButton from '@mui/material/ListItemButton';
import AdbIcon from '@mui/icons-material/Adb';
import DarkMode from './DarkMode';
import { categoriesAll } from '../Constants/Categories';
import { UserContext } from '../context/UserContextWrapper';

// Her kategori için alt kategoriler
const categorySubitems = {
  giyim: ['Erkek', 'Kadın', 'Çocuk', 'Ayakkabı', 'Aksesuar'],
  kozmetik: ['Cilt Bakımı', 'Makyaj', 'Saç Bakımı', 'Vücut Bakımı'],
  elektronik: ['Telefon', 'Bilgisayar', 'Tablet', 'Aksesuar'],
  spor: ['Fitness', 'Outdoor', 'Su Sporları', 'Spor Giyim']
};

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export function Head() {

 const {user, setUser } = React.useContext(UserContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [hoveredCategory, setHoveredCategory] = React.useState(null);
  const [categoryAnchorEl, setCategoryAnchorEl] = React.useState(null);
  const timeoutRef = React.useRef(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCategoryHover = (event, category) => {
    // Önceki timeout'u iptal et
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setHoveredCategory(category);
    setCategoryAnchorEl(event.currentTarget);
  };

  const handleCategoryLeave = () => {
    // 200ms sonra popover'ı kapat
    timeoutRef.current = setTimeout(() => {
      setHoveredCategory(null);
      setCategoryAnchorEl(null);
    }, 200);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >          </Typography>

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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {categoriesAll.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {categoriesAll.map((page) => (
              <Box
                key={page}
                onMouseEnter={(e) => handleCategoryHover(e, page)}
                onMouseLeave={handleCategoryLeave}
                sx={{ position: 'relative' }}
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ 
                    my: 2, 
                    color: 'white', 
                    display: 'block',
                    textTransform: 'capitalize'
                  }}
                >
                  {page}
                </Button>
              </Box>
            ))}
          </Box>
          <Popover
            open={Boolean(categoryAnchorEl) && hoveredCategory}
            anchorEl={categoryAnchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            disableRestoreFocus
            disableEnforceFocus
            disableAutoFocus
            slotProps={{
              backdrop: {
                sx: { pointerEvents: 'none' }
              },
              paper: {
                onMouseEnter: () => {
                  // Popover açıkken timeout'u iptal et
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                  }
                },
                onMouseLeave: handleCategoryLeave,
                sx: {
                  mt: 1,
                  pointerEvents: 'auto'
                }
              }
            }}
          >
            <Box sx={{ py: 1, minWidth: '200px' }}>
              {hoveredCategory && categorySubitems[hoveredCategory]?.map((subitem) => (
                <ListItemButton
                  key={subitem}
                  sx={{
                    px: 2,
                    py: 1,
                    fontSize: '0.9rem',
                    '&:hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.05)',
                    }
                  }}
                >
                  {subitem}
                </ListItemButton>
              ))}
            </Box>
          </Popover>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {user}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <DarkMode />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
 