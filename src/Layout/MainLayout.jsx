import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="px-24">
		
			<Outlet></Outlet>
		</div>
	);
};

export default MainLayout;