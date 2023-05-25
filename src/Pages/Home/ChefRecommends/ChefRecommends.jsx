import SectionTitle from '../../../components/SectionTitle';
import ChefCard from './ChefCard/ChefCard';

const ChefRecommends = () => {
	return (
		<div className='container my-36'>
			<SectionTitle
				subHeading={'Should Try'}
				heading={'CHEF RECOMMENDS'}
			></SectionTitle>
			<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-6'>
				<ChefCard />
				<ChefCard />
				<ChefCard />
			</div>
		</div>
	);
};

export default ChefRecommends;
