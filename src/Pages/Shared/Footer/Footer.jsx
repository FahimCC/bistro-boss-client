import { FaTwitter } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { GiSelfLove } from 'react-icons/gi';
import { ImFacebook } from 'react-icons/im';

const Footer = () => {
	return (
		<footer className='text-white'>
			<div className='flex flex-col md:flex-row  justify-center'>
				<div className='bg-[#1F2937] w-full md:w-1/2 flex flex-col items-center space-y-1 lg:pl-20 py-16'>
					<h3 className='text-3xl mb-5'>Contact Us</h3>
					<p>123 ABS Street, Uni 21, Bangladesh</p>
					<p>+88 123456789</p>
					<p>Mon - Fri: 08:00 - 22:00</p>
					<p>Sat - Sun: 10:00 - 23:00</p>
				</div>
				<div className='bg-[#111827] w-full md:w-1/2 flex flex-col items-center lg:pr-20  py-16'>
					<h3 className='text-3xl mb-5'>Follow Us</h3>
					<p className='mb-4'>Join us on social media</p>
					<div className='flex gap-5 text-xl'>
						<ImFacebook />
						<FiInstagram />
						<FaTwitter />
					</div>
				</div>
			</div>
			<div className='bg-[#151515] text-center text-white py-2'>
				<p>Copyright © BISTRO BOSS RESTAURANT - All right reserved.</p>
				<p>
					<span>Developed by Fahim Faysal</span>
					<GiSelfLove className='inline ml-2' />
				</p>
			</div>
		</footer>
	);
};

export default Footer;
