import { Link } from "react-router-dom";
import CartIcon from "../utils/cartIcon";
import useStore from "../utils/useStore";

const Navbar = () => {

	const cartCount = useStore((state) => state.cart.length);

	return (
		<nav className="fixed top-0 left-0 right-0 bg-gray-800 text-white flex justify-between items-center shadow-md z-50">
			<div className="flex w-10/12 justify-between items-center p-2 mx-auto">
				<div className="w-16">
					<Link to="/">
						<img
							src="https://opensea.io/static/images/logos/opensea-logo.svg"
							alt="logo"
						/>
					</Link>
				</div>
				<div className="flex flex-grow items-center ml-8">
					<Link to="/" className="p-4 text-lg hover:text-gray-400">
						Home
					</Link>
					<Link to="/shop" className="p-4 text-lg hover:text-gray-400">
						Shop
					</Link>
					<Link to="/about" className="p-4 text-lg hover:text-gray-400">
						About Us
					</Link>
					<Link to="/contact" className="p-4 text-lg hover:text-gray-400">
						Contact
					</Link>

					<input
						type="text"
						placeholder="Search..."
						className="ml-8 p-2 rounded bg-gray-700 text-white focus:outline-none"
					/>
				</div>
				<div className="flex items-center">
					<Link to="/account" className="p-4 text-lg hover:text-gray-400">
						Account
					</Link>
					<div className="relative">
						{cartCount > 0 && (
							<span className="absolute top-0 right-0 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
								{cartCount}
							</span>
						)}
						<Link to="/Cart">
							<CartIcon />
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
