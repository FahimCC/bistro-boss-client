import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navbar = () => {
	const { user, logout } = useContext(AuthContext);

	const handleLogout = () => {
		logout()
			.then(() => {})
			.catch(error => console.log(error));
	};

	const NavigationBar = (
		<>
			<li className='hover:text-[#EEFF25]'>
				<Link
					to='/'
					className='hover:bg-transparent font-extrabold text-lg uppercase '
				>
					Home
				</Link>
			</li>
			<li className='hover:text-[#EEFF25]'>
				<Link
					to='/our-menu'
					className='hover:bg-transparent font-extrabold text-lg uppercase '
				>
					Menu
				</Link>
			</li>
			<li className='hover:text-[#EEFF25]'>
				<Link
					to='/our-shop/all'
					className='hover:bg-transparent font-extrabold text-lg uppercase '
				>
					Order
				</Link>
			</li>
			<li className='hover:text-[#EEFF25]'>
				<Link
					to='/contact'
					className='hover:bg-transparent font-extrabold text-lg uppercase '
				>
					Contact
				</Link>
			</li>
			{!user ? (
				<li className='hover:text-[#EEFF25]'>
					<Link
						to='/login'
						className='hover:bg-transparent font-extrabold text-lg uppercase '
					>
						Login
					</Link>
				</li>
			) : (
				<>
					<li className='hover:text-[#EEFF25]'>
						<Link
							onClick={handleLogout}
							className='hover:bg-transparent font-extrabold text-lg uppercase '
						>
							Logout
						</Link>
					</li>
					<div className='dropdown dropdown-end'>
						<label
							tabIndex={0}
							className='btn btn-ghost btn-circle avatar tooltip tooltip-open tooltip-bottom tooltip-warning'
							data-tip={user.displayName}
						>
							<div className='w-10 rounded-full'>
								<img src={user.photoURL} />
							</div>
						</label>
						{/* <ul
							tabIndex={0}
							className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
						>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a>Logout</a>
							</li>
						</ul> */}
					</div>
				</>
			)}
		</>
	);

	return (
		<div className='bg-black bg-opacity-50 fixed z-10 w-full'>
			<div className='container'>
				<div className='navbar text-white'>
					<div className='navbar-start'>
						<div className='dropdown'>
							<label tabIndex={0} className='btn btn-ghost lg:hidden'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-5 w-5'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
										d='M4 6h16M4 12h8m-8 6h16'
									/>
								</svg>
							</label>
							<ul
								tabIndex={0}
								className='menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-black bg-opacity-80'
							>
								{NavigationBar}
							</ul>
						</div>
						<Link to='/' className='font-cinzel squeeze'>
							<span className='font-black text-3xl'>Bistro Boss</span>
							<br />
							<span className='font-bold text-2xl tracking-[.20em]'>
								Restaurant
							</span>
						</Link>
					</div>
					<div className='navbar-end hidden lg:flex'>
						<ul className='menu menu-horizontal px-1'>{NavigationBar}</ul>
					</div>
					{/* <div className='navbar-end'>
						<a className='btn'>Get started</a>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
