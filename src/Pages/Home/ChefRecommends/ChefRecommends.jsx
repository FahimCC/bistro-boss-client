import SectionTitle from '../../../components/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import MenuCard from '../../Shared/MenuCard/MenuCard';

const ChefRecommends = () => {
	const [menu] = useMenu();
	const desserts = menu.filter(item => item.category === 'dessert');
	const salads = menu.filter(item => item.category === 'salad');
	const pizzas = menu.filter(item => item.category === 'pizza');
	return (
		<div className='container my-36'>
			<SectionTitle
				subHeading={'Should Try'}
				heading={'CHEF RECOMMENDS'}
			></SectionTitle>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
				{salads.slice(0, 1).map(item => (
					<MenuCard key={item._id} item={item}></MenuCard>
				))}
				{desserts.slice(4, 5).map(item => (
					<MenuCard key={item._id} item={item}></MenuCard>
				))}
				{pizzas.slice(0, 1).map(item => (
					<MenuCard key={item._id} item={item}></MenuCard>
				))}
			</div>
		</div>
	);
};

export default ChefRecommends;
