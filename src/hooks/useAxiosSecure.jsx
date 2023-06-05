import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const useAxiosSecure = () => {
	const navigate = useNavigate();
	const { logOut } = useContext(AuthContext);
	const axiosSecure = axios.create({
		baseURL: 'http://localhost:5000',
	});

	useEffect(() => {
		axiosSecure.interceptors.request.use(request => {
			const token = localStorage.getItem('access-token');
			if (token) {
				request.headers.Authorization = `Bearer ${token}`;
			}
			return request;
		});
		axiosSecure.interceptors.response.use(
			response => response.data,
			async err => {
				if (
					err.response &&
					(err.response.status === 401 || err.response.status === 403)
				) {
					await logOut();
					navigate('/login');
				}
				return Promise.reject(err);
			}
		);
	}, [logOut, navigate, axiosSecure]);

	return [axiosSecure];
};

export default useAxiosSecure;
