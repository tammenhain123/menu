import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [
    {
      id: '1', // Identificador único do item
      name: 'Produto Exemplo', // Nome do produto
      price: 19.99, // Preço do produto
      quantity: 1 // Quantidade inicial
    },
    {
      id: '2', // Identificador único do item
      name: 'Produto 2', // Nome do produto
      price: 19.99, // Preço do produto
      quantity: 1 // Quantidade inicial
    }
  ]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const { id, name, price } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, name, price, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    }
  }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
