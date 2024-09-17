import cartSlice from "./Cartslice";

const Store = connfigureStore({
    redure:{
        cart:cartSlice.reducer
    }
})