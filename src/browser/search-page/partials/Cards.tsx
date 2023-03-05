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
      <Card sx={ { display: 'flex', height: '100%' } }>
        <CardActionArea onClick={ () => handleOpenModal(book.image_url) }>
          <CardMedia
            sx={ { aspectRatio: '180 / 280', objectFit: 'contain', objectPosition: 'top' } }
            component='img'
            image={ book.thumbnail_url }
            alt={ book.cover_i }
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div' noWrap>
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
      <Card sx={ { display: 'flex', width: '100%' } } onClick={ () => handleOpenModal(book.image_url) }>
        <Box sx={ { display: 'flex', flexDirection: 'row', alignItems: 'center', flex: 1 } }>
          <CardContent sx={ { flex: 1 } }>
            <Typography component="div" variant="h5" noWrap>
              { book.title }
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              Author: { book.author }
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              First Publish Year: { book.first_publish_year }
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              ISBN: { book.isbn }
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={ { width: 200 } }
          image={ book.thumbnail_url }
          alt={ book.cover_i }
        />
      </Card>
      <BookModal image_url={ book.image_url } open={ openModal } onClose={ () => setOpenModal(false) } />
    </>
  );
}