import { configureStore } from "@reduxjs/toolkit";
import onCartItems from "./slices/onCartItems";

export const store = configureStore({
	reducer: { cart: onCartItems },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
