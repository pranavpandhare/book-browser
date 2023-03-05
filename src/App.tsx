import React from 'react';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import SearchPage from './browser/search-page';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <Container component='main' maxWidth='xl'>
        <Box sx={ { my: 4 } }>
          <SearchPage />
        </Box>
      </Container>
    </QueryClientProvider>
  );
}