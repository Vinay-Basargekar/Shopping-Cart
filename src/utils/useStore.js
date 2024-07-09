import { create } from "zustand";

const useStore = create((set, get) => ({
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
