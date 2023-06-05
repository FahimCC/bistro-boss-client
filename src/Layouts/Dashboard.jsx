import { useContext } from 'react';
import { AiFillHome, AiTwotoneContacts } from 'react-icons/ai';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import {
	FaBook,
	FaCalendarAlt,
	FaShoppingBag,
	FaShoppingCart,
	FaUsers,
} from 'react-icons/fa';
import { GiHamburgerMenu, GiWallet } from 'react-icons/gi';
import { ImSpoonKnife } from 'react-icons/im';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { TbStarsFilled } from 'react-icons/tb';
import { TfiMenuAlt } from 'react-icons/tfi';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useCart from '../hooks/useCart';
import { AuthContext } from '../providers/AuthProvider';

const Dashboard = () => {
	const [cart] = useCart();
	const { logOut } = useContext(AuthContext);

	// const isAdmin = true;

	const [isAdmin] = useAdmin();

	return (
		<div className='drawer lg:drawer-open '>
			<input id='menu' type='checkbox' className='drawer-toggle' />
			<div className='drawer-content  '>
				<Outlet />
				<label
					htmlFor='menu'
					className='btn btn-primary drawer-button lg:hidden'
				>
					Open drawer
				</label>
			</div>
			<div className='drawer-side'>
				<label htmlFor='menu' className='drawer-overlay'></label>
				<div className='bg-[#D1A054] h-full p-8 overflow-hidden'>
					<Link to='/dashboard' className='font-cinzel squeeze text-black'>
						<span className='font-black text-3xl'>Bistro Boss</span>
						<br />
						<span className='font-bold text-2xl tracking-[.20em]'>
							Restaurant
						</span>
					</Link>
					<ul className='menu w-64 h-full uppercase font-semibold  pt-20'>
						{isAdmin ? (
							<>
								<li className='hover:text-white'>
									<Link>
										<AiFillHome className='text-2xl' /> Admin Home
									</Link>
								</li>
								<li className='hover:text-white'>
									<Link to='add-item'>
										<ImSpoonKnife className='text-2xl' /> Add Item
									</Link>
								</li>
								<li className='hover:text-white'>
									<Link to='manage-items'>
										<TfiMenuAlt className='text-2xl' /> Manage Items
									</Link>
								</li>
								<li className='hover:text-white'>
									<Link>
										<FaBook className='text-2xl' />
										Manage Bookings
									</Link>
								</li>
								<li className='hover:text-white'>
									<Link to='all-users'>
										<FaUsers className='text-2xl' />
										All Users
									</Link>
								</li>
							</>
						) : (
							<>
								<li className='hover:text-white'>
									<Link>
										<AiFillHome className='text-2xl' /> User Home
									</Link>
								</li>
								<li className='hover:text-white'>
									<Link>
										<FaCalendarAlt className='text-2xl' /> Reservation
									</Link>
								</li>
								<li className='hover:text-white'>
									<Link>
										<GiWallet className='text-2xl' /> Payment History
									</Link>
								</li>
								<li className='hover:text-white'>
									<Link to='my-cart'>
										<FaShoppingCart className='text-2xl' />
										My Cart
										<span className='badge badge-sm text-info indicator-item'>
											{cart?.length || 0}
										</span>
									</Link>
								</li>
								<li className='hover:text-white'>
									<Link>
										<TbStarsFilled className='text-2xl' />
										Add Review
									</Link>
								</li>
								<li className='hover:text-white'>
									<Link>
										<BsFillCalendarCheckFill className='text-2xl' />
										My Booking
									</Link>
								</li>
							</>
						)}

						<li className='border-b-2 border-white pb-4 mb-4 bg-transparent'></li>
						<li className='hover:text-white'>
							<Link to='/'>
								<AiFillHome className='text-2xl' />
								Home
							</Link>
						</li>
						<li className='hover:text-white'>
							<Link to='/our-menu'>
								<GiHamburgerMenu className='text-2xl' />
								Menu
							</Link>
						</li>
						<li className='hover:text-white'>
							<Link to='/our-shop/all'>
								<FaShoppingBag className='text-2xl' />
								Order
							</Link>
						</li>
						<li className='hover:text-white'>
							<Link to='/contact'>
								<AiTwotoneContacts className='text-2xl' />
								Contact
							</Link>
						</li>
						<li className='hover:text-white'>
							<Link onClick={() => logOut()} to='/contact'>
								<RiLogoutBoxLine className='text-2xl' />
								Logout
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
