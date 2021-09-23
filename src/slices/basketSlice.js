import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

export const basketSlice = createSlice({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            state.items = [...state.items, action.payload];
        },
        removeFromBasket: (state, action) => {
            const index = state.items.findIndex(basketItem => basketItem.id === action.payload.id);

            let newBasket = [...state.items];

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.warn(`Nao deu pra remover o produto(id:${action.payload.id} pq ele nao existe)`);
            }

            state.items = newBasket;
        },
        clearBasket: (state, action) => {

            let clearBasket = action.payload;
            state.items = clearBasket;

        }
    },
});

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) => state.basket.items.reduce((total, item) => total + item.price, 0);


export default basketSlice.reducer;