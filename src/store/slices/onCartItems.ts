import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import OnCartItemInterface from "@/types/onCartItem";

const initialState: OnCartItemInterface[] = [];

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem: (state, action: PayloadAction<OnCartItemInterface>) => {
			console.log(
				"fui invocado",
				action.payload.name,
				action.payload.flavor,
				action.payload.size
			);
			const existingItem = state.find(
				(item) =>
					item.name === action.payload.name &&
					item.flavor === action.payload.flavor &&
					item.size === action.payload.size
			);
			if (!existingItem) {
				return [action.payload, ...state];
			}
			console.log("cheguei ateh aqui");
			existingItem.amount++;
			return;
		},
		subItem: (state, action: PayloadAction<OnCartItemInterface>) => {
			const existingItem = state.find(
				(item) =>
					item.name === action.payload.name &&
					item.flavor === action.payload.flavor &&
					item.size === action.payload.size
			);
			if (!existingItem) return;

			if (existingItem.amount === 1) {
				state = state.filter(
					(item) =>
						item.name !== existingItem.name ||
						item.flavor !== existingItem.flavor ||
						item.size !== existingItem.size
				);
				return state;
			}

			if (existingItem.amount > 1) existingItem.amount--;
			return;
		},
	},
});

export const { addItem, subItem } = cartSlice.actions;

export default cartSlice.reducer;
