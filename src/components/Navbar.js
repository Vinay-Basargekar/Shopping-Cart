import { Link } from "react-router-dom";
import CartIcon from "../utils/cartIcon";

const Navbar = () => {
	return (
		<nav className="bg-gray-800 text-white">
			<div className="flex w-10/12 justify-between items-center p-4 mx-auto">
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
					<CartIcon />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
