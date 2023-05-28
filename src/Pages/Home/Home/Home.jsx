import { Helmet } from 'react-helmet-async';
import coverImg from '../../../assets/home/chef-service.jpg';
import SectionCover from '../../Shared/SectionCover/SectionCover';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
	const des =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.';
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Home</title>
			</Helmet>
			<Banner />
			<Category />
			<div className='container'>
				<SectionCover
					coverImg={coverImg}
					title={'Bistro Boss'}
					description={des}
				/>
			</div>
			<PopularMenu />
			<div className='container my-24'>
				<p className='py-4 md:py-16 text-xl md:text-3xl lg:text-5xl  bg-black text-white text-center'>
					Call Us: +88 0192345678910
				</p>
			</div>
			<ChefRecommends />
			<Featured />
			<Testimonials />
		</div>
	);
};

export default Home;
