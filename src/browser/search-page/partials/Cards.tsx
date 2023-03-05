import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

import { Book } from '../../utils/types';
import { useState } from 'react';
import BookModal from './Modal';

export function BookCardVertical({ book }: { book: Book }) {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (image_url: string) => {
    setOpenModal(true);
  };

  return (
    <>
      <Card>
        <CardActionArea onClick={ () => handleOpenModal(book.image_url) }>
          <CardMedia
            component='img'
            image={ book.thumbnail_url }
            alt={ book.cover_i }
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              { book.title }
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              { book.author }
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <BookModal image_url={ book.image_url } open={ openModal } onClose={ () => setOpenModal(false) } />
    </>
  );
}

export function BookCardHorizontal({ book }: { book: Book }) {

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (image_url: string) => {
    setOpenModal(true);
  };

  return (
    <>
      <Card sx={ { display: 'flex' } } onClick={ () => handleOpenModal(book.image_url) }>
        <Box sx={ { display: 'flex', flexDirection: 'column' } }>
          <CardContent sx={ { flex: '1 0 auto' } }>
            <Typography component="div" variant="h5">
              { book.title }
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              { book.author }
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              { book.first_publish_year }
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              { book.isbn }
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={ { width: 151 } }
          image={ book.thumbnail_url }
          alt={ book.cover_i }
        />
      </Card>
      <BookModal image_url={ book.image_url } open={ openModal } onClose={ () => setOpenModal(false) } />
    </>
  );
}