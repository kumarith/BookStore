interface CartState {
    cartItems: CartItem[];
  }

 export interface CartItem {
    bookId :String,
    bookTitle: String,
    count:Number
 } 


 const initialState: CartState = {
    cartItems: [],
  };


  export default function cartReducer(state = initialState, action: any) {
    switch (action.type) {
        case "ADDTOCART":
            return { ...state, cartItems: state.cartItems.push ({bookId: action.payload.bookId, bookTitle: action.payload.bookTitle, count : action.count  })  };
    }
}