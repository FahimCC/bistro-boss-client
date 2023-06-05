import axios from 'axios';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import google from '../assets/icon/google.png';
import { AuthContext } from '../providers/AuthProvider';

const SocialLogin = ({ from }) => {
	const navigate = useNavigate();
	const { googleSignIn } = useContext(AuthContext);

	// const [axiosSecure] = useAxiosSecure();

	const handleGoogleLogin = () => {
		googleSignIn()
			.then(result => {
				const loggedUser = result.user;
				console.log('User: ', loggedUser);
				toast.success('User Login Successful.');

				axios.post('http://localhost:5000/users', { email: loggedUser.email, name: loggedUser.displayName }).then(data => {
					console.log('axios post : ', data);
					navigate(from, { replace: true });
				});

				// fetch('http://localhost:5000/users', {
				// 	method: 'POST',
				// 	headers: {
				// 		'content-type': 'application/json',
				// 	},
				// 	body: JSON.stringify(user),
				// })
				// 	.then(res => res.json())
				// 	.then(() => navigate(from, { replace: true }));
			})
			.catch(error => console.log(error));
	};

	return (
		<>
			<div className='divider'>OR</div>
			<Link
				onClick={handleGoogleLogin}
				className='border-2 mt-2 h-10 flex justify-center items-center px-3 py-1 rounded-lg squeeze'
			>
				<img className='w-11 h-8' src={google} alt='' />
				<span className='-ml-1'>Continue with Google</span>
			</Link>
		</>
	);
};

export default SocialLogin;
