import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import banner from '../../../assets/shop/banner2.jpg';
import useMenu from '../../../hooks/useMenu';
import PageCover from '../../Shared/PageCover/PageCover';
import './OurShop.css';

import OrderTab from '../OrderTab/OrderTab';

const OurShop = () => {
	const { category } = useParams();
	const categories = [
		'all',
		'popular',
		'offer',
		'salad',
		'pizza',
		'soup',
		'dessert',
		'drink',
	];
	const initialIndex = categories.indexOf(category);

	const [tabIndex, setTabIndex] = useState(initialIndex);

	const [menu, loading] = useMenu();
	console.log(loading);

	const drinks = menu.filter(item => item.category === 'drinks');
	const desserts = menu.filter(item => item.category === 'dessert');
	const salads = menu.filter(item => item.category === 'salad');
	const soups = menu.filter(item => item.category === 'soup');
	const pizzas = menu.filter(item => item.category === 'pizza');
	const offer = menu.filter(item => item.category === 'offered');
	const popular = menu.filter(item => item.category === 'popular');

	// console.log(salads);

	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Order</title>
			</Helmet>
			<PageCover banner={banner} title='OUR SHOP' />
			<div className='container my-28'>
				<Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
					<TabList>
						<Tab>ALL</Tab>
						<Tab>POPULAR</Tab>
						<Tab>OFFER</Tab>
						<Tab>SALAD</Tab>
						<Tab>PIZZA</Tab>
						<Tab>SOUP</Tab>
						<Tab>DESSERT</Tab>
						<Tab>DRINK</Tab>
					</TabList>

					<TabPanel>
						<OrderTab items={menu}></OrderTab>
					</TabPanel>
					<TabPanel>
						<OrderTab items={popular}></OrderTab>
					</TabPanel>
					<TabPanel>
						<OrderTab items={offer}></OrderTab>
					</TabPanel>
					<TabPanel>
						<OrderTab items={salads}></OrderTab>
					</TabPanel>
					<TabPanel>
						<OrderTab items={pizzas}></OrderTab>
					</TabPanel>
					<TabPanel>
						<OrderTab items={soups}></OrderTab>
					</TabPanel>
					<TabPanel>
						<OrderTab items={desserts}></OrderTab>
					</TabPanel>
					<TabPanel>
						<OrderTab items={drinks}></OrderTab>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default OurShop;
