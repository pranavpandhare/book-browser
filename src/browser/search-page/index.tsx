import { ChangeEvent, useEffect, useState } from "react";

import { useDebounce } from "usehooks-ts";
import { QueryClient, useQuery } from 'react-query';

import { AppBar, Toolbar, IconButton, Menu, MenuItem, Button, ButtonGroup, Container, InputAdornment, TextField } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ViewCompactIcon from '@mui/icons-material/ViewCompact';
import ViewListIcon from '@mui/icons-material/ViewList';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import Gridview from "./partials/GridView";
import getBooks from "../utils/ApiCall";
import ListView from "./partials/ListView";

export default function SearchPage() {
  const [book, setBook] = useState('');
  const debouncedBookValue = useDebounce<string>(book, 500);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [paginationNr, setPaginationNr] = useState<10 | 20 | 50>(10);
  const [page, setPage] = useState(1);
  const [view, setView] = useState<'Grid' | 'List'>('Grid');

  const { data } = useQuery(
    ['books', debouncedBookValue, page, paginationNr],
    () => debouncedBookValue && getBooks(debouncedBookValue, paginationNr, page),
    { keepPreviousData: true, staleTime: 60 * 5000, cacheTime: 60000 }
  )

  useEffect(() => {
    if (data) {
      const queryClient = new QueryClient();
      queryClient.prefetchQuery(['books', debouncedBookValue, paginationNr, page + 1], () =>
        debouncedBookValue && getBooks(debouncedBookValue, paginationNr, page + 1)
      )
    }
  }, [data, page, debouncedBookValue, paginationNr]);

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

  const handlePageButton = (pageNr: number) => {
    if (pageNr > 0) setPage(pageNr);
  };

  const handleBookName = (event: ChangeEvent<HTMLInputElement>) => {
    setBook(event.target.value);
  };

  const isMenuOpen = Boolean(anchorEl);
  const renderMenu = (
    <Menu
      anchorEl={ anchorEl }
      anchorOrigin={ {
        vertical: 'top',
        horizontal: 'right',
      } }
      keepMounted
      transformOrigin={ {
        vertical: 'top',
        horizontal: 'right',
      } }
      open={ isMenuOpen }
      onClose={ handleMenuClose }
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
            onClick={ handleProfileMenuOpen }
            sx={ { mr: 2 } }
          >
            <MenuIcon />
          </IconButton>
          <TextField
            id="outlined-start-adornment"
            sx={{ m: 1, width: '100%' }}
            placeholder="Search…"
            value={ book }
              onChange={ handleBookName }
            InputProps={{
              startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            }}
          />
          <ButtonGroup variant="outlined" aria-label="outlined button group" sx={ { m: 2 } }>
            <Button onClick={ () => handleViewButton('Grid') }><ViewCompactIcon /></Button>
            <Button onClick={ () => handleViewButton('List') }><ViewListIcon /></Button>
          </ButtonGroup>
          <ButtonGroup variant="outlined" aria-label="outlined button group" sx={ { m: 2 } }>
            <Button onClick={ () => handlePageButton(page - 1) }><NavigateBeforeIcon /></Button>
            <Button onClick={ () => handlePageButton(page + 1) }><NavigateNextIcon /></Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Container fixed>
        { view && view === 'Grid' ? <Gridview books={ data } /> : <></> }
        { view && view === 'List' ? <ListView books={ data } /> : <></> }
      </Container>
      { renderMenu }
    </>
  );
}