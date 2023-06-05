import { createBrowserRouter } from 'react-router-dom';
import Dashboard from '../Layouts/Dashboard';
import MainLayout from '../Layouts/MainLayout';
import Contact from '../Pages/Contact/Contact';
import AddItem from '../Pages/Dashboard/AddItem/AddItem';
import AllUser from '../Pages/Dashboard/AllUser/AllUser';
import ManageItems from '../Pages/Dashboard/ManageItems/ManageItems';
import MyCart from '../Pages/Dashboard/MyCart/MyCart';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import OurMenu from '../Pages/OurMenu/OurMenu/OurMenu';
import OurShop from '../Pages/OurShop/OurShop/OurShop';
import SignUp from '../Pages/SignUp/SignUp';
import AdminRoute from './AdminRoute';
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
	{
		path: 'dashboard',
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
		children: [
			{
				path: 'my-cart',
				element: <MyCart />,
			},
			{
				path: 'add-item',
				element: (
					<AdminRoute>
						<AddItem />
					</AdminRoute>
				),
			},
			{
				path: 'all-users',
				element: (
					<AdminRoute>
						<AllUser />
					</AdminRoute>
				),
			},
			{
				path: 'manage-items',
				element: (
					<AdminRoute>
						<ManageItems />
					</AdminRoute>
				),
			},
		],
	},
]);

export default router;
