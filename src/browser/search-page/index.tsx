import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, ButtonGroup } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from "../styles";
import { useState } from "react";
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import ViewListIcon from '@mui/icons-material/ViewList';
import Gridview from "./partials/GridView";

export default function SearchPage() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [paginationNr, setPaginationNr] = useState<10 | 20 | 50>(10);
  const [view, setView] = useState<'Grid' | 'List'>('Grid');

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (nr: 10 | 20 | 50) => {
    setPaginationNr(nr);
    setAnchorEl(null);
  };

  const handleViewButton = (view: 'Grid' | 'List') => {
    setView(view);
  };

  const isMenuOpen = Boolean(anchorEl);
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={ () => handleMenuClose(10) }>10</MenuItem>
      <MenuItem onClick={ () => handleMenuClose(20) }>20</MenuItem>
      <MenuItem onClick={ () => handleMenuClose(50) }>50</MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="pages"
            onClick={handleProfileMenuOpen}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <ButtonGroup variant="outlined" aria-label="outlined button group" sx={{ ml: 2 }}>
            <Button onClick={ () => handleViewButton('Grid') }><ViewCompactIcon /></Button>
            <Button onClick={ () => handleViewButton('List') }><ViewListIcon /></Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Gridview/>
      {renderMenu}
    </>
  );
}