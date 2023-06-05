import { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
	LoadCanvasTemplate,
	loadCaptchaEnginge,
	validateCaptcha,
} from 'react-simple-captcha';
import bgLogin from '../../assets/others/authentication.png';
import auth from '../../assets/others/authentication2.png';
import SocialLogin from '../../components/SocialLogin';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';

const Login = () => {
	const { signIn } = useContext(AuthContext);
	useEffect(() => {
		loadCaptchaEnginge(6);
	}, []);

	const [disable, setDisable] = useState(true);

	const location = useLocation();
	const navigate = useNavigate();

	const from = location?.state?.from?.pathname || '/';

	const handleSubmit = event => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log(email, password);

		signIn(email, password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				form.reset();
				toast.success('User Login Successful.');

				navigate(from, { replace: true });
			})
			.catch(error => console.log(error));
	};

	const handleCaptcha = e => {
		e.preventDefault();
		const captchaValue = e.target.value;

		if (validateCaptcha(captchaValue)) {
			setDisable(false);
		} else {
			setDisable(true);
		}
	};

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Login</title>
			</Helmet>
			<div
				className='min-h-screen flex justify-center items-center'
				style={{ backgroundImage: `url('${bgLogin}')` }}
			>
				<div className='container'>
					<div className='hero min-h-fit'>
						<div className='hero-content flex-col lg:flex-row gap-20 shadow-xl md:p-10 rounded-lg'>
							<div className='text-center lg:text-left '>
								<img className='' src={auth} alt='' />
							</div>
							<div className='card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100'>
								<form onSubmit={handleSubmit} className='card-body'>
									<h1 className='text-3xl font-bold text-center'>Login now!</h1>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>Email</span>
										</label>
										<input
											type='text'
											name='email'
											placeholder='email'
											className='input input-bordered'
										/>
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>Password</span>
										</label>
										<input
											type='text'
											name='password'
											placeholder='password'
											className='input input-bordered'
										/>
									</div>
									<div className='form-control text-center'>
										<label className='label mx-auto'>
											<LoadCanvasTemplate />
										</label>
										<input
											onMouseLeave={handleCaptcha}
											type='text'
											placeholder='type the captcha above'
											className='input input-bordered'
										/>
									</div>
									<div className='form-control mt-6'>
										<input
											className='btn btn-primary'
											type='submit'
											value='Login'
											disabled={false}
										/>
									</div>
									
									<SocialLogin from={from} />
									<p className='text-[#D1A054] text-center'>
										<small>
											New here?
											<Link
												to='/signup'
												state={{ from: location?.state }}
												className='hover:underline'
											>
												<b> Create a New Account</b>
											</Link>
										</small>
									</p>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Login;
