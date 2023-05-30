import { Helmet } from 'react-helmet-async';
import banner from '../../assets/contact/banner.jpg';
import PageCover from '../Shared/PageCover/PageCover';

const Contact = () => {
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Contact</title>
			</Helmet>
			<PageCover banner={banner} title='OUR SHOP' />
		</div>
	);
};

export default Contact;
