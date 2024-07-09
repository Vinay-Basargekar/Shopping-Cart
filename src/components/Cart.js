import useStore from "../utils/useStore";

const Cart = () => {
	const cart = useStore((state) => state.cart); // Access cart state from store
	const removeFromCart = useStore((state) => state.removeFromCart); // Access remove action from store

	return (
		<div className="mt-20">
			<h2 className="text-2xl font-bold mb-4">Cart Items</h2>
			{cart.length === 0 ? (
				<p className="text-gray-600">Your cart is empty.</p>
			) : (
				cart.map((item) => (
					<div
						key={item.id}
						className="flex justify-between items-center bg-gray-800 p-4 mb-2"
					>
						<img
							src={item.image}
							alt={item.title}
							className="w-20 h-20 object-cover rounded mr-4"
						/>
						<span className="text-white w-[40rem]">{item.title}</span>
						<span className="text-white">${item.price}</span>
						<button
							onClick={() => removeFromCart(item.id)}
							className="bg-red-700 hover:bg-red-600 text-white px-2 py-1 rounded"
						>
							Delete
						</button>
					</div>
				))
			)}
		</div>
	);
};

export default Cart;
