import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import MenuCard from '../../Shared/MenuCard/MenuCard';

const OrderTab = ({ items }) => {
	const pagination = {
		clickable: true,
		renderBullet: function (index, className) {
			return (
				'<span class=" w-8 h-6 text-white rounded-full ' +
				className +
				'">' +
				(index + 1) +
				'</span>'
			);
		},
	};

	// console.log('length', Math.ceil(items.length / 6));
	const length = Math.ceil(items.length / 6);
	const array = [];

	for (let i = 0; i < length; i++) {
		array.push(i);
	}
	// console.log(array);

	return (
		<Swiper
			pagination={pagination}
			modules={[Pagination]}
			spaceBetween={55}
			className='mySwiper p-10'
		>
			{array.map((arr, i) => (
				<SwiperSlide key={i}>
					<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
						{items.slice(arr * 6, (arr + 1) * 6).map(item => (
							<MenuCard key={item._id} item={item} isPrice={true}></MenuCard>
						))}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default OrderTab;
