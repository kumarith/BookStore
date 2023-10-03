import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
//import axios from 'axios';
import { Book } from "types/Book";
import Paper from "@mui/material/Paper";
import { AppBar, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, IconButton, Link, Toolbar, Typography } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { booksList , paper,appBar, rightIcons,appRightIconButtonClass,bookResultsContainerClass } from "styles/styles";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

function BookDetails() {
  const router = useRouter();
  const { query } = router;
  const id = query.id;
  const [book, setBook] = useState<Book | null>(null);
  /** Google API is already case insensitive */
  /** Open api , no key required. */
  const API_URL = `https://www.googleapis.com/books/v1/volumes/${id}`;

  useEffect(() => {
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
  }, [API_URL]);

  return (
    <div>
     
      <AppBar position="static" style={appBar}>
      <Toolbar>
      <AutoStoriesIcon  style={{ fontSize: '2rem',color: 'blueviolet'  }} /> 
      <Typography  variant="h4" style={{color:"blueviolet", textAlign:"left",flexGrow:1}} ><Link href="/"> Bookshop </Link> </Typography>
     
      <div style={rightIcons}>
        <IconButton style={appRightIconButtonClass}>
            <ShoppingCartIcon />
        </IconButton>
        <IconButton style={appRightIconButtonClass}>
            <AccountCircleIcon />
        </IconButton>
        </div>
      </Toolbar>
    </AppBar>

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
            <div style={{justifyContent: 'right',  display: 'flex'}} ><Button variant="outlined" color="primary"  startIcon={<AddShoppingCartIcon />}> Add to Cart </Button></div>
           </div>
     
        </Paper>
      ) : (
        <div style={{justifyContent: 'center',  display: 'flex'}} > <p><CircularProgress /> Loading...</p></div>  
      )}

  
  </div>
  );
}

export default BookDetails;
