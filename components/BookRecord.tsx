import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Book } from "types/Book";
import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';


interface BookRecordInterface {
  book: Book;
}

const BookRecord: React.FC<BookRecordInterface> = ({ book }) => {
  return <div>
<Card style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', maxWidth: 800 }}>
      <CardMedia
        component="img"
        width="auto"
        height="50"
        image={book.volumeInfo.imageLinks?.thumbnail || ''}
        alt={book.volumeInfo.title}
        style={{ margin: '16px' }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {book.volumeInfo.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? `Author(s): ${book.volumeInfo.authors.join(', ')}` : 'No Author'}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {book.volumeInfo.publisher ? `Publisher: ${book.volumeInfo.publisher}` : 'Publisher not available'}
        </Typography>
        <Link variant="body2" color="textSecondary"
          href = {`/bookDetails?id=${book.id}`} target="_blank"> Detais
        </Link>
      </CardContent>
    </Card>
  </div>;
};

export default BookRecord;
