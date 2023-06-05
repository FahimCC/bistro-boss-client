import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';

import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
	const { user, loading } = useContext(AuthContext);
	const [axiosSecure] = useAxiosSecure();
	const { refetch, data: cart = [] } = useQuery({
		queryKey: ['carts', user?.email],
		enabled: !loading,
		queryFn: async () => {
			const res = await axiosSecure.get(`/carts?email=${user?.email}`);
			// console.log('axiosSecure res : ', res);
			return res;
		},
	});

	// const {
	// 	refetch,
	// 	data: cart = [],
	// 	isLoading,
	// } = useQuery({
	// 	queryKey: ['carts', user?.email],
	// 	queryFn: async () => {
	// 		const res = await fetch(
	// 			`http://localhost:5000/carts?email=${user?.email}`, {
	// headers: {authorization: `Bearer ${token}`}
	// }
	// 		);
	// 		return res.json();
	// 	},
	// });

	return [cart, refetch];
};

export default useCart;
