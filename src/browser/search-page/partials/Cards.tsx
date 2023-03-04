import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface componentProps {
  author: string;
  thumbnail: string;
  title: string;
  id: string;
}

export default function BookCard({author, thumbnail, title, id}: componentProps) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component='img'
          height='140'
          image= { thumbnail }
          alt='book'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            { title }
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            { author }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}