import { Link } from 'react-router-dom';

const Navbar = () => {
	const NavigationBar = (
		<div className='font-extrabold text-lg uppercase '>
			<li className='hover:text-[#EEFF25]'>
				<Link to='/' className='hover:bg-transparent '>
					Home
				</Link>
			</li>
		</div>
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
