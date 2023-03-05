import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent } from '@mui/material';

import { Book } from '../../utils/types';
import { BookCardVertical } from './Cards';

interface ComponentProps {
  books: Book[];
}

export default function Gridview({ books }: ComponentProps) {
  return (
    <Card sx={ { minWidth: 'auto', m: 2 } }>
      <CardContent>
        <Grid container spacing={2} alignItems='stretch'>
          { books && Array.from(books).map((book, index) => (
            <Grid xs={12} sm={6} md={4} lg={3} key={ index } sx={ { height: 600 } }>
              <BookCardVertical book={ book } />
            </Grid>
          )) }
        </Grid>
      </CardContent>
    </Card>
  );
}