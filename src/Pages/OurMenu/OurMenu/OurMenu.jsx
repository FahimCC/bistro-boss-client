import { Helmet } from 'react-helmet-async';
import banner from '../../../assets/menu/banner3.jpg';
import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';
import PageCover from '../../Shared/PageCover/PageCover';

import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';

const OurMenu = () => {
	const [menu, loading] = useMenu();
	console.log(loading);

	const offered = menu.filter(item => item.category === 'offered');
	const desserts = menu.filter(item => item.category === 'dessert');
	const salads = menu.filter(item => item.category === 'salad');
	const soups = menu.filter(item => item.category === 'soup');
	const pizzas = menu.filter(item => item.category === 'pizza');
	console.log('Offer : ', offered);
	console.log('Dessert: ', desserts);

	const description =
		'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Our Menu</title>
			</Helmet>
			<PageCover banner={banner} title={'OUR MENU'} />
			<div className='my-24'>
				<SectionTitle
					subHeading="Don't miss"
					heading="TODAY'S OFFER"
				></SectionTitle>
				<MenuCategory items={offered} btnText={'ORDER YOUR FAVOURITE FOOD'} />
				<MenuCategory
					coverImg={dessertImg}
					title={'DESSERTS'}
					description={description}
					items={desserts}
					btnText={'ORDER YOUR FAVOURITE FOOD'}
				/>
				<MenuCategory
					coverImg={pizzaImg}
					title={'PIZZAS'}
					description={description}
					items={pizzas}
					btnText={'ORDER YOUR FAVOURITE FOOD'}
				/>
				<MenuCategory
					coverImg={saladImg}
					title={'SALADS'}
					description={description}
					items={salads}
					btnText={'ORDER YOUR FAVOURITE FOOD'}
				/>
				<MenuCategory
					coverImg={soupImg}
					title={'SOUPS'}
					description={description}
					items={soups}
					btnText={'ORDER YOUR FAVOURITE FOOD'}
				/>
			</div>
		</div>
	);
};

export default OurMenu;
