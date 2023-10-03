import React, { useState } from 'react';
import { Button, IconButton, List, ListItem, ListItemText, Paper, Typography , Table, TableBody,TableCell, TableContainer,TableHead,TableRow} from '@mui/material';
import { types } from 'util';
import { Cart, CartItem } from "types/Cart";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Padding } from '@mui/icons-material';
import { paper, shoppingCartPaper } from 'styles/styles';



interface ShoppingCartInterface {
  items: CartItem[];
  whenClosed : () => void;
}


const BooksShoppingCart: React.FC<ShoppingCartInterface> = ({ items, whenClosed }) => {
  const [list, setList] = useState<CartItem[]>(items);
  const truncateText = (text:string, maxLength:number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + '...';
  };
  return (
  
    <div>

      <Paper style={shoppingCartPaper}>
      <Typography>
        <b>Shopping Cart</b>
      </Typography>
      
      {(list.length == 0 )? (  
          <div>Cart is empty</div>
       ) : (
        <div>
      <TableContainer component={Paper}>
      <Table>
        {/*
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        */}
        <TableBody>
          {list.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{truncateText(item.title, 12)}</TableCell>
              <TableCell>{item.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      <div style={{justifyContent: 'right',  display: 'flex', fontSize: '6'}} ><Button  variant="outlined" color="primary"  startIcon={<ShoppingCartCheckoutIcon />}> Checkout </Button></div>
      </div>
  )}
   </Paper>
    </div>
    
    
  );
};

export default BooksShoppingCart;
