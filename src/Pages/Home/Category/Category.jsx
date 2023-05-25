import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import SectionTitle from '../../../components/SectionTitle';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const Category = () => {
	return (
		<div className='container my-24'>
			<SectionTitle
				heading='ORDER ONLINE'
				subHeading='From 11:00am to 10:00pm'
			></SectionTitle>
			<Swiper
				slidesPerView={1}
				spaceBetween={10}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
				}}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				modules={[Pagination, Autoplay]}
				className='mySwiper pb-16'
			>
				<SwiperSlide>
					<img src={slide1} alt='' />
					<p className='font-cinzel text-2xl -mt-14 text-white text-center'>
						SALADS
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide2} alt='' />
					<p className='font-cinzel text-2xl -mt-14 text-white text-center'>
						PIZZAS
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide3} alt='' />
					<p className='font-cinzel text-2xl -mt-14 text-white text-center'>
						SOUPS
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide4} alt='' />
					<p className='font-cinzel text-2xl -mt-14 text-white text-center'>
						DESSERTS
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide5} alt='' />
					<p className='font-cinzel text-2xl -mt-14 text-white text-center'>
						SALADS
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide2} alt='' />
					<p className='font-cinzel text-2xl -mt-14 text-white text-center'>
						PIZZAS
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide3} alt='' />
					<p className='font-cinzel text-2xl -mt-14 text-white text-center'>
						SOUPS
					</p>
				</SwiperSlide>
				<SwiperSlide>
					<img src={slide4} alt='' />
					<p className='font-cinzel text-2xl -mt-14 text-white text-center'>
						DESSERTS
					</p>
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Category;
