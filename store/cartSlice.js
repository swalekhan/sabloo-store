const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    cart: [],
    totalAmount: 0,
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem(state, action) {
            const find = state.cart.find((item) => item._id === action.payload._id)
            if (find) {
                find.quantity = +find.quantity + Number(action.payload.quantity)
            } else {
                state.cart.push(action.payload)
            }
        },

        getTotal(state) {
            // after discountTotalPrice.............................
            const { allAmount, allQuantity } = state.cart.reduce((a, item) => {
                const { price, quantity, discount } = item
                const totalAmount = (price - (price * discount) / 100) * quantity
                a.allAmount += totalAmount
                a.allQuantity += quantity
                return a;
            },
                {
                    allAmount: 0,
                    allQuantity: 0
                })
            state.totalAmount = allAmount.toFixed(2);
            state.totalQuantity = allQuantity;
        },

        removeItem(state, action) {
            state.cart = state.cart.filter((item) => item._id !== action.payload)
        },

        increamnetQuantity(state, action) {
            const find = state.cart.find((item) => item._id === action.payload);
            if (find) { find.quantity = Number(find.quantity) + 1; }
        },

        decreamentQuantity(state, action) {
            const find = state.cart.find((item) => item._id === action.payload);
            if (find.quantity > 1) { find.quantity = Number(find.quantity) - 1 }
        },


        repalceData(state, action) {
            state.cart = action.payload
        }

    }
})

export const { addItem, increamnetQuantity, decreamentQuantity, removeItem, getTotal, repalceData } = cartSlice.actions;

export default cartSlice.reducer