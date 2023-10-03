import { ADDTOCART,REMOVEFROMCART } from './actiontypes';

export const addToCart = () => ({ type: ADDTOCART , payload: { bookId: String, bookTitle :String, count: Number }    });
export const removeFromCart = () => ({ type: REMOVEFROMCART    });
