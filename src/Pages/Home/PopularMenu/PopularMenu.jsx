import { useEffect, useState } from 'react';
import MenuItem from '../../../components/MenuItem';
import SectionTitle from '../../../components/SectionTitle';

const PopularMenu = () => {
	const [menu, setMenu] = useState([]);
	useEffect(() => {
		fetch('menu.json')
			.then(res => res.json())
			.then(data => {
				const popularItems = data.filter(item => item.category === 'popular');
				setMenu(popularItems);
			});
	}, []);

	console.log(menu);

	return (
		<div className='container my-32'>
			<SectionTitle
				subHeading='Check it out'
				heading='FROM OUR MENU'
			></SectionTitle>

			<div className='grid lg:grid-cols-2 gap-10 my-16'>
				{menu.map(menuItem => (
					<MenuItem key={menuItem._id} menuItem={menuItem}></MenuItem>
				))}
			</div>
			<div className='text-center'>
				<button className='btn-custom'>VIEW FULL MENU</button>
			</div>
		</div>
	);
};

export default PopularMenu;
