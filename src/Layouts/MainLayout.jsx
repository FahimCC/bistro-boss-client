import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const MainLayout = () => {
	const location = useLocation();
	const isLogin =
		location.pathname.includes('login') || location.pathname.includes('sign');
	return (
		<div>
			<Navbar />
			<Outlet />
			{isLogin || <Footer />}
		</div>
	);
};

export default MainLayout;
