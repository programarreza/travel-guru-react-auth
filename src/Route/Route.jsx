import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home></Home>
	},
	{	
	path: "/",
	element: <MainLayout></MainLayout>,
	children: [

		{
			path: "/login",
			element: <Login></Login>
		},
		{
			path: "/register",
			element: <Register></Register>
		}
	]
	}
])

export default router;