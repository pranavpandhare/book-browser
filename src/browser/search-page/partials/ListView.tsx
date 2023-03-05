import { List, ListItem } from "@mui/material";
import { Book } from "../../utils/types";
import { BookCardHorizontal } from "./Cards";

interface ComponentProps{
  books: Book[];
}

export default function ListView({ books } : ComponentProps ) {
  return (
    <List sx={ { display: 'flex', flexDirection: 'column' } }>
      {books && Array.from(books).map((book, index) => (
        <ListItem>
          <BookCardHorizontal book = { book } />
        </ListItem>
      ))}
    </List>
  );
}