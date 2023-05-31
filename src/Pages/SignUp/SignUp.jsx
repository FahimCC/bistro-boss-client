import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import bgLogin from '../../assets/others/authentication.png';
import login from '../../assets/others/authentication2.png';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {
	// const [disable, setDisable] = useState(true);
	const { createUser, logout, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate();
	const location = useLocation();

	const from = location?.state?.from?.pathname || '/';

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();
	const onSubmit = data => {
		console.log(data);
		createUser(data.email, data.password)
			.then(result => {
				const loggedUser = result.user;
				console.log(loggedUser);
				reset();

				updateUserProfile(data.name, data.photoURL)
					.then(() => {})
					.catch(error => console.log(error));

				toast.success('Registration Successful.Please Login...');

				logout()
					.then(() => {})
					.catch(error => console.log(error));

				navigate('/login', { replace: true });
				// navigate(from, { replace: true });
			})
			.catch(error => console.log(error));
	};

	// console.log(Object.keys(errors).length);
	// if (Object.keys(errors).length > 0) {
	// 	setDisable(true);
	// } else {
	// 	setDisable(false);
	// }

	return (
		<>
			<Helmet>
				<title>Bistro Boss | Register</title>
			</Helmet>
			<div
				className='min-h-screen flex justify-center items-center'
				style={{ backgroundImage: `url('${bgLogin}')` }}
			>
				<div className='container'>
					<div className='hero min-h-fit '>
						<div className='hero-content flex-col lg:flex-row-reverse gap-20  shadow-xl md:p-10 rounded-lg'>
							<div className='text-center lg:text-left '>
								<img className='' src={login} alt='' />
							</div>
							<div className='card md:w-1/2 w-full max-w-sm shadow-2xl bg-base-100'>
								<form onSubmit={handleSubmit(onSubmit)} className='card-body'>
									<h1 className='text-3xl font-bold text-center'>
										Register now!
									</h1>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Name <span className='text-error'>*</span>
											</span>
										</label>
										<input
											type='text'
											{...register('name', { required: true })}
											placeholder='name'
											className='input input-bordered'
										/>
										{errors.name && (
											<small className='text-error mt-1'>
												Name is required
											</small>
										)}
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Photo URL <span className='text-error'>*</span>
											</span>
										</label>
										<input
											type='text'
											{...register('photoURL', {
												required: true,
											})}
											placeholder='Photo URL'
											className='input input-bordered'
										/>
										{errors.photoURL?.type === 'required' && (
											<small className='text-error mt-1'>
												Photo URL is required
											</small>
										)}
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Email <span className='text-error'>*</span>
											</span>
										</label>
										<input
											type='text'
											{...register('email', {
												required: true,
												pattern:
													/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/,
											})}
											placeholder='email'
											className='input input-bordered'
										/>
										{errors.email?.type === 'required' && (
											<small className='text-error mt-1'>
												Email is required
											</small>
										)}
										{errors.email?.type === 'pattern' && (
											<small className='text-error mt-1 text-xs'>
												Provide a valid email address.
											</small>
										)}
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Password <span className='text-error'>*</span>
											</span>
										</label>
										<input
											type='text'
											{...register('password', {
												required: true,
												minLength: 6,
												pattern:
													/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
											})}
											placeholder='password'
											className='input input-bordered'
										/>
										{errors.password?.type === 'required' && (
											<small className='text-error mt-1 text-xs'>
												Password is required
											</small>
										)}
										{errors.password?.type === 'minLength' && (
											<small className='text-error mt-1 text-xs'>
												Password must be 6 characters.
											</small>
										)}
										{errors.password?.type === 'pattern' && (
											<small className='text-error mt-1 text-xs'>
												Password must be contains at least one uppercase, one
												lowercase, one digit and one special character.
											</small>
										)}
									</div>

									<div className='form-control mt-6'>
										<input
											className='btn btn-primary'
											type='submit'
											value='Register'
											// disabled={disable}
										/>
									</div>
									<p className='text-[#D1A054] text-center'>
										<small>
											Already registered?
											<Link to='/login' className='hover:underline'>
												<b> Go to login</b>
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

export default SignUp;
