import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
			<div className="text-center">
				<h1 className="text-6xl font-bold mb-4">404</h1>
				<p className="text-2xl mb-8">
					Oops! The page you are looking for does not exist.
				</p>
				<Link to="/" className="text-lg text-blue-500 hover:underline">
					Go back to Home
				</Link>
			</div>
			<img
				src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
				alt="error"
				className="w-64 mt-8"
			/>
		</div>
	);
};

export default ErrorPage;
