import { useEffect, useState } from "react";
import Product from "./Product";

const Shopping = () => {
	const [shopData, setShopData] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const response = await fetch("https://fakestoreapi.com/products");
		const data = await response.json();
		setShopData(data);
		console.log(data);
	};

	return (
		<>
			<h1 className=" flex w-10/12 p-4 mt-20 mx-auto text-3xl font-bold ">
				Choose your favorite items
			</h1>
			<div className="flex flex-wrap w-10/12 justify-between  p-4 mx-auto">
				{shopData.map((res) => (
					<Product key={res.id} product={res} />
				))}
			</div>
		</>
	);
};

export default Shopping;
