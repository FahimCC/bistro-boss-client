import MenuItem from '../../../components/MenuItem';
import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';

const PopularMenu = () => {
	const [menu] = useMenu();
	const popular = menu.filter(item => item.category === 'popular');

	// console.log(menu);

	return (
		<div className='container my-32'>
			<SectionTitle
				subHeading='Check it out'
				heading='FROM OUR MENU'
			></SectionTitle>
			<MenuCategory items={popular} btnText={'VIEW FULL MENU'} />
		</div>
	);
};

export default PopularMenu;
