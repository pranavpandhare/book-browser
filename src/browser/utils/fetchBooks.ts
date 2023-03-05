import axios from "axios";

export default async function fetchBooks(title: string, limit: number, page: number){

  const { data } = await axios.get('https://openlibrary.org/search.json?title='+ title +'&limit='+ limit +'&page=' + page);

  const books = data.docs.map((book: any) => {
    const thumbnail_url = book.cover_i ?
      `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` :
      'https://via.placeholder.com/150x200?text=No+Thumbnail';

    const image_url = book.cover_i ?
      `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg` :
      'https://via.placeholder.com/500x500?text=No+Image';


    return {
      title: book.title,
      author: book.author_name?.[0] ?? 'Unknown',
      thumbnail_url,
      image_url,
      cover_i: book.cover_i,
      first_publish_year: book.first_publish_year,
      isbn: book.isbn?.[0] ?? 'Unknown',
    };
  });

  return books;
}