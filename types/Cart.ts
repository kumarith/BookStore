export interface Cart {
    totalItems: number;
    items: CartItem[];
}

export interface CartItem {
    id: string;
    count: number;
    title: string;
    price: number;
}
