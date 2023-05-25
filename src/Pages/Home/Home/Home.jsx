import SectionCover from '../../Shared/SectionCover/SectionCover';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
	return (
		<div>
			<Banner />
			<Category />
			<div className='container'>
				<SectionCover />
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
