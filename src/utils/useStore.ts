import { create } from "zustand";

interface Product {
	id: number;
	name: string;
	price: number;
	title: string;
	image: string;
}

interface StoreState {
	cart: Product[];
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
	clearCart: () => void;
	cartCount: () => number;
}

// Create the store with typed state and actions
const useStore =
	create <
	StoreState >
	((set, get) => ({
		cart: [],
		addToCart: (product) => {
			set((state) => ({
				cart: [...state.cart, product],
			}));
			console.log("Cart after adding product:", get().cart);
		},
		removeFromCart: (productId) =>
			set((state) => ({
				cart: state.cart.filter((item) => item.id !== productId),
			})),
		clearCart: () => set({ cart: [] }),
		cartCount: () => get().cart.length,
	}));

export default useStore;
