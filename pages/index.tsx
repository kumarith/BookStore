import React from "react";
import Link from "next/link";
import booklist from "../public/bookslist";
import { useState, useEffect } from "react";
import Search from "components/Searchbar";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { Cart, CartItem } from "types/Cart";


import {
  AppBar,
  CircularProgress,
  Container,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import BookRecord from "components/BookRecord";
import { Margin, ShopOutlined, ShoppingCart } from "@mui/icons-material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { booksList , paper,appBar, rightIcons,appRightIconButtonClass,bookResultsContainerClass } from "styles/styles";
import { useRouter } from "next/router";
import BookDetails from "./bookDetails";
import BookDetailsComponent from "components/BookDetailsComponenet";
import BooksShoppingCart from "components/Cart";
import { google_api_key } from "./key";


export default function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);

  const apiKey = google_api_key;
  
  const router = useRouter();
  const { query } = router;
  const intialQuery = query.qry|| '';
 
 
  const [searchQuery, setSearchQuery] = useState( () => { 
    /** Read initla state from query params  */
    return "";
    }  ); 
    const [selectedBookID, setSelectedBookID] = useState(""); 
    const [selectedBookPrice, setSelectedBookPrice] = useState(0); 
    const [selectedBookDiscount, setSelectedBookDiscount] = useState(0); 
    /** To show and hide BookdetailsComponent. */
    const [detailsMode, setDetailsMode] = useState(false); 
    const [cartItems, setCartitems] = useState<CartItem[]>([]); 
 
 

  useEffect(() => {
    
    async function fetchData() {
       if(String(searchQuery).trim() === ""){
           setBooks([]);
       }
     
      try {
        const response = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&key=${apiKey}`
        );
        const data = await response.json();
        console.log(" => " + data.items.length);
       
      
        setBooks(data.items);
       
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    fetchData();
   
  }, [searchQuery,cartItems]);

 const triggerSearch = (query:string) => {
      /* not working .. */
      setLoading(true);
      setSearchQuery(query)
      setLoading(false);
 }

  function addToCartItemsState(_id: string, _title: string, _price: number, _count: number) {
    let cartItem:CartItem = {id:_id,title:_title,price:_price,count:_count}
    let currentCartItemsState = cartItems;
    currentCartItemsState.push(cartItem)
    setCartitems(currentCartItemsState)
  }

  return (


  <div> {/** MainContainer */}
    <AppBar position="static" style={appBar}>
      <Toolbar>
      <AutoStoriesIcon  style={{ fontSize: '2rem',color: 'blueviolet'  }} /> 
      <Typography variant="h4" style={{color:"blueviolet", textAlign:"left",flexGrow:1}} >Bookshop</Typography>
      <div>
      <Search onSearch={(query) => {triggerSearch(query)}}></Search>
      </div>
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
  <Grid container>
    {/* Left Column (80%) */}
    <Grid item xs={10}>
    {
     (detailsMode == true )? (    
       <div> {/* Container for Details */}
          <BookDetailsComponent id={selectedBookID} price={selectedBookPrice} discount={selectedBookDiscount} onClose={ () => {setDetailsMode(false)}}  addToCart={  (id,title,price,count) =>   { addToCartItemsState(id,title,price,count) }  } ></BookDetailsComponent>
        </div> /** Container for Details End */
     ) : (
        <div style={bookResultsContainerClass}>    {/* Container for Search Results */}
          {(loading == true )? (
            <div style={{justifyContent: 'center',  display: 'flex'}} > 
              <p><CircularProgress /> Loading...</p>
            </div>
          ) : (
          <Paper style={paper}>         
            {
              books.map((bookItem: any) => (
               <BookRecord book={bookItem} discount={ Math.floor(Math.random() * (100 - 20 + 1)) + 20} price={ Math.floor(Math.random() * (100 - 20 + 1)) + 20}  whenSelectedForDetails={ (id:string, discount:number, price:number ) => { setSelectedBookID(id) , setDetailsMode(true), setSelectedBookDiscount(discount), setSelectedBookPrice(price) }}></BookRecord> ))
            }
            </Paper>
           )}
        </div> /* Container for Search Results */
     )}
     </Grid>
     <Grid item xs={2}>
       <BooksShoppingCart items={cartItems} whenClosed={() => {alert("closed")}}  ></BooksShoppingCart>
     </Grid>
   </Grid>  
 
            
  </div>

  );
}

//import cartReducer from "./Redux/reducers.ts "
//const store = configureStore({reducer :counterReducer });