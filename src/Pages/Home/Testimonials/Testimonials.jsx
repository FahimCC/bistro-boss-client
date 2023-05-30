import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { useEffect, useState } from 'react';
import { FaComments } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../components/SectionTitle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, EffectFlip, Navigation } from 'swiper';

const Testimonials = () => {
	const customStyles = {
		itemShapes: RoundedStar,
		activeFillColor: '#CD9003',
		inactiveFillColor: '#A1A1A1',
	};

	const [reviews, setReviews] = useState([]);
	useEffect(() => {
		const loadReviews = async () => {
			const res = await fetch('http://localhost:5000/reviews');
			const data = await res.json();
			setReviews(data);
		};
		loadReviews();
	}, []);

	// console.log(reviews);

	return (
		<div className='container my-24'>
			<SectionTitle
				heading={'TESTIMONIALS'}
				subHeading={'What Our Clients Say'}
			></SectionTitle>

			<Swiper
				effect={'flip'}
				grabCursor={true}
				navigation={true}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
				}}
				modules={[EffectFlip, Navigation, Autoplay]}
				className='mySwiper py-8'
			>
				{reviews?.map(review => (
					<SwiperSlide key={review._id} className='flex flex-col items-center'>
						<Rating
							style={{ maxWidth: 160 }}
							value={review.rating}
							itemStyles={customStyles}
							readOnly
						/>
						<FaComments className='text-6xl my-6' />
						<p className='max-w-3xl text-center'>{review.details}</p>
						<h3 className='my-3 text-lg text-[#CD9003]'>{review.name}</h3>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Testimonials;
