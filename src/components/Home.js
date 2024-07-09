import { Link } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
	return (
		<>
			<div className="w-10/12 mx-auto py-10 mt-10">
				<div className="flex justify-between items-center mb-16">
					<div className="max-w-lg">
						<h1 className="font-bold py-4 text-5xl text-gray-800">
							Shop For Fun!
						</h1>
						<p className="text-lg text-gray-600">
							Unleash your style with our latest collection
						</p>
						<Link to="/shop">
							<button className="rounded my-4 bg-[#d9534f] hover:bg-[#c9302c] text-white cursor-pointer py-3 px-6">
								Shop Now
							</button>
						</Link>
					</div>
					<img
						src="https://fakestoreapi.com/icons/intro.svg"
						alt="home-img"
						className="w-[40rem] my-8"
					/>
				</div>

				{/* <div className="mb-16">
				<h2 className="text-3xl font-bold text-gray-800 mb-8">
					Featured Products
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					
					<div className="bg-white p-6 rounded-lg shadow-lg">
						<img
							src="https://via.placeholder.com/150"
							alt="product"
							className="w-full h-48 object-cover mb-4"
						/>
						<h3 className="text-xl font-semibold mb-2">Product Name</h3>
						<p className="text-gray-600 mb-4">$Price</p>
						<Link to="/product/1">
							<button className="bg-[#d9534f] hover:bg-[#c9302c] text-white py-2 px-4 rounded">
								View Details
							</button>
						</Link>
					</div>
					
				</div>
			</div> */}

				{/* <div className="mb-16">
					<h2 className="text-3xl font-bold text-gray-800 mb-8">
						Customer Reviews
					</h2>
					<div className="space-y-6">
						
						<div className="bg-white p-6 rounded-lg shadow-lg">
							<p className="text-gray-600">
								"Amazing quality and great customer service!"
							</p>
							<p className="text-sm text-gray-500 mt-2">- Customer Name</p>
						</div>

					</div>
				</div> */}

				<div className="bg-[#f8f9fa] p-10 rounded-lg shadow-lg">
					<h2 className="text-3xl font-bold text-gray-800 mb-8">
						Stay Updated
					</h2>
					<p className="text-gray-600 mb-4">
						Subscribe to our newsletter to get the latest updates and offers.
					</p>
					<form className="flex">
						<input
							type="email"
							placeholder="Enter your email"
							className="flex-1 p-3 rounded-l-lg border border-gray-300 focus:outline-none"
						/>
						<button className="bg-[#d9534f] hover:bg-[#c9302c] text-white py-3 px-6 rounded-r-lg">
							Subscribe
						</button>
					</form>
				</div>
			</div>
            <div>
                <Footer/>
            </div>
		</>
	);
};

export default Home;
