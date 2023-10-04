import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Book } from "types/Book";
import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

interface BookRecordInterface {
  book: Book;
  whenSelectedForDetails : (id:string, price:number, discount:number) => void;
  discount: number
  price: number
 
}

const BookRecord: React.FC<BookRecordInterface> = ({ book, whenSelectedForDetails , discount, price}) => {
return <div>
<Card style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', maxWidth: 800 }}>
      <CardMedia
        component="img"
        height="50px"
        //max-height = "100px"
        image={book.volumeInfo.imageLinks?.smallThumbnail || ''}
        alt={book.volumeInfo.title}
        style={{ margin: '16px', width: "50px" , height: "75px" }}
      />
      <CardContent>
        <Typography variant="body2" component="div" color="textProimaruy">
          {book.volumeInfo.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {book.volumeInfo.authors && book.volumeInfo.authors.length > 0 ? `Author(s): ${book.volumeInfo.authors.join(', ')}` : 'No Author'}
        </Typography>
        <Typography variant="body2" color="GrayText">
          {book.volumeInfo.publisher ? `Publisher: ${book.volumeInfo.publisher}` : 'Publisher not available'}
        </Typography>
        <CardActions>
        <Button size="small" style ={{color:"red"}}> <LocalOfferIcon/> {discount} % off </Button>
        <Button size="small" > Price:  {price} DKK </Button>

        <Button  href = {`/bookDetails?id=${book.id}`} target="_blank" size="small">More Info</Button>
        <Button onClick = {(e) => whenSelectedForDetails(book.id , price, discount ) } size="small">Details</Button>
      </CardActions>
      </CardContent>
    </Card>
  </div>;
};

export default BookRecord;
