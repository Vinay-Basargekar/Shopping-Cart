const Product = ({ resData }) => {
	const { image, title, category, price, rating } = resData;
	return (
		<div className="p-4 w-[350px] mb-4 border rounded-lg shadow-lg bg-white">
			<img
				src={image}
				alt={title}
				className="w-full h-[300px] object-contain rounded-t-lg"
			/>
			<div className="p-4">
				<h2 className="text-xl font-bold mb-2">{title}</h2>
				<p className="text-gray-600 mb-1">Category: {category}</p>
				<p className="text-gray-800 font-semibold mb-2">Price: ${price}</p>
				<div className="flex items-center mb-2">
					<span className="bg-green-600 text-white px-2 py-1 rounded mr-2">
						{rating.rate}★
					</span>
					<span className="text-gray-600">({rating.count} reviews)</span>
				</div>
				<button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default Product;
