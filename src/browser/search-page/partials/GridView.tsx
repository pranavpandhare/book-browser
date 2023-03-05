import Grid from '@mui/material/Unstable_Grid2';
import { Card, CardContent } from '@mui/material';

import { Book } from '../../utils/types';
import { BookCardVertical } from './Cards';

interface ComponentProps {
  books: Book[];
}

export default function Gridview({ books }: ComponentProps) {
  return (
    <Card sx={ { minWidth: 'auto', mt: 2 } }>
      <CardContent>
        <Grid container spacing={ { xs: 2, md: 3 } } columns={ { xs: 4, sm: 8, md: 12 } }>
          { books && Array.from(books).map((book, index) => (
            <Grid xs={ 2 } sm={ 4 } md={ 4 } key={ index }>
              <BookCardVertical book={ book } />
            </Grid>
          )) }
        </Grid>
      </CardContent>
    </Card>
  );
}