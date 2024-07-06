import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-10 mt-16">
			<div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 className="text-lg font-bold mb-4">About Us</h3>
					<p className="text-gray-400">
						We are dedicated to bringing you the best products at the best
						prices. Shop with us for an amazing experience!
					</p>
				</div>

				<div>
					<h3 className="text-lg font-bold mb-4">Quick Links</h3>
					<ul className="space-y-2">
						<li>
							<Link to="/" className="text-gray-400 hover:text-white">
								Home
							</Link>
						</li>
						<li>
							<Link to="/shop" className="text-gray-400 hover:text-white">
								Shop
							</Link>
						</li>
						<li>
							<Link to="/about" className="text-gray-400 hover:text-white">
								About Us
							</Link>
						</li>
						<li>
							<Link to="/contact" className="text-gray-400 hover:text-white">
								Contact Us
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h3 className="text-lg font-bold mb-4">Follow Us</h3>
					<ul className="flex space-x-4">
						<li>
							<a
								href="https://facebook.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white"
							>
								Facebook
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white"
							>
								Twitter
							</a>
						</li>
						<li>
							<a
								href="https://instagram.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white"
							>
								Instagram
							</a>
						</li>
						<li>
							<a
								href="https://linkedin.com"
								target="_blank"
								rel="noopener noreferrer"
								className="text-gray-400 hover:text-white"
							>
								LinkedIn
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="w-10/12 mx-auto mt-8 text-center text-gray-500">
				<p>&copy; 2024 Your Company Name. All rights reserved.</p>
			</div>
		</footer>
	);
};

export default Footer;
