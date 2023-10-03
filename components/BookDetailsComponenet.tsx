import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Button, CircularProgress, Paper, Typography } from '@mui/material';
import { Book } from 'types/Book';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';




// Define an interface for the callback function
interface BookDetailsClose {
  (): void;
}

interface BookDetailsProps {
  onClose: BookDetailsClose; 
  id : string;
  addToCart : (id:string, title:string, price: number, count :number) => void;
  price: number;
  discount: number;
}

 

const BookDetailsComponent: React.FC<BookDetailsProps> = ({ onClose , id, addToCart, price, discount}) => {
  const API_URL = `https://www.googleapis.com/books/v1/volumes/${id}`;
  const [book, setBook] = useState<Book | null>(null);

  async function fetchBookDetails() {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setBook(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchBookDetails();
  return (
    <div>
    
      {book ? (
        <Paper elevation={3} style={{ padding: "16px", display: "flex" }}>
          <img
            src={book.volumeInfo.imageLinks?.thumbnail || "/no-image.jpg"}
            alt={book.volumeInfo.title}
            style={{
              maxWidth: "200px",
              maxHeight: "200px",
              marginRight: "16px",
            }}
          />
          <div>
            <Typography variant="h4">{book.volumeInfo.title}</Typography>
            <Typography variant="h6">
              Author(s): {book.volumeInfo.authors?.join(", ") || "N/A"}
            </Typography>
            <Typography variant="h6">
              Publisher: {book.volumeInfo.publisher || "N/A"}
            </Typography>
            <Typography variant="h6">
              Summary: 
            </Typography>
            <div dangerouslySetInnerHTML={{ __html: book.volumeInfo.description || "<p>Not available</p>" }} />
            {/* google api give summery is html , so using dangerouslySetInnerHTML  */}
            {/*
            <div style={{justifyContent: 'right',  display: 'flex'}} ><Button onClick ={() => {addToCart(book.id,book.volumeInfo.title,0,2)}} variant="outlined" color="primary"  startIcon={<AddShoppingCartIcon />}> Add to Cart </Button></div>
            <div style={{justifyContent: 'left',  display: 'flex'}} ><Button  onClick={onClose} variant="outlined" color="primary"  startIcon={<AddShoppingCartIcon />}> Back to list </Button></div>
          */}
            <div style={{justifyContent: 'right',  display: 'flex' , padding:'20px'}} >
                <Button  onClick={onClose} variant="outlined" color="primary"  style={{margin:"15px"}} startIcon={<ArrowBackIosIcon />}> Back to list </Button>
                <Button  onClick={onClose} variant="contained" color="info" style={{margin:"15px"}} startIcon={<MonetizationOnIcon />}>Price : {price} </Button>
                <Button  onClick={onClose} variant="contained" color="error"  style={{margin:"15px"}}  startIcon={<LocalOfferIcon />}> Discount :  {discount} %</Button>

                <Button style={{justifyContent: 'left',  display: 'flex', margin:"15px"}}  onClick ={() => {addToCart(book.id,book.volumeInfo.title,price,2)}} variant="outlined" color="primary"  startIcon={<AddShoppingCartIcon />}> Add to Cart </Button>

            </div>

            </div>
     
        </Paper>
      ) : (
        <div style={{justifyContent: 'center',  display: 'flex'}} > <p><CircularProgress /> Loading...</p></div>  
      )}

  
  </div>
  );
 
};

export default BookDetailsComponent;
