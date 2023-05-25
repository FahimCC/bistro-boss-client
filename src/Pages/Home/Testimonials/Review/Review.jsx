import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper';

const Review = ({ review }) => {
	const customStyles = {
		itemShapes: RoundedStar,
		activeFillColor: '#CD9003',
		inactiveFillColor: '#A1A1A1',
	};
	console.log(review);

	return (
		<div>
			<Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
				<SwiperSlide>
					<div>
						
						<p>csjdvn skvn sjk</p>
					</div>
				</SwiperSlide>
			</Swiper>
			{/* <Swiper
				effect={'flip'}
				grabCursor={true}
				pagination={true}
				navigation={true}
				modules={[EffectFlip, Pagination, Navigation]}
				className='mySwiper'
			></Swiper> */}
		</div>
	);
};

export default Review;
