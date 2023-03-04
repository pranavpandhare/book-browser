import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SearchPage from './browser/search-page';

export default function App() {
  return (
    <Container component="main" maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <SearchPage />
      </Box>
    </Container>
  );
}