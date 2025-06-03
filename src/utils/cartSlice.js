const { createSlice } = require("@reduxjs/toolkit");


const cartSlice = createSlice({
   name: "cart",
   initialState: {
      items: [],
   },
   reducers: {
      addItem: (state, action) =>{
           state.items.push(action.payload);  // we are here mutating the state here 
      },
      removeItem: (state) => {
         state.items.pop();
      },
      clearSlice: (state) => {
         state.items.length = [];
      }
   },
});

export default cartSlice.reducer;
export const {addItem, removeItem, clearSlice} = cartSlice.actions;