import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Shopping from "./components/Shopping";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";

const App = () => {
	return (
		<div>
			<Navbar />
			<Outlet/>
		</div>
	);
};

const Router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
        errorElement:<ErrorPage/>,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/shop",
				element: <Shopping />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={Router} />);
