import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import OnCartItemInterface from "@/types/onCartItem";
import { create } from "domain";

const initialState: OnCartItemInterface[] = [];

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<OnCartItemInterface>) => {
			return [action.payload, ...state];
		},
	},
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
