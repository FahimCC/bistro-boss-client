import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Contact from '../Pages/Contact/Contact';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import OurMenu from '../Pages/OurMenu/OurMenu/OurMenu';
import OurShop from '../Pages/OurShop/OurShop/OurShop';
import SignUp from '../Pages/SignUp/SignUp';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/our-menu',
				element: <OurMenu />,
			},
			{
				path: '/our-shop/:category',
				element: (
					<PrivateRoute>
						<OurShop />
					</PrivateRoute>
				),
			},
			{
				path: '/contact',
				element: <Contact />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/signup',
				element: <SignUp />,
			},
		],
	},
]);

export default router;
