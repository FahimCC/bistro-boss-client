import { Link } from 'react-router-dom';
import MenuItem from '../../../components/MenuItem';
import SectionCover from '../SectionCover/SectionCover';

const MenuCategory = ({ coverImg, title, description, items, btnText }) => {
	// console.log('cate ', items.category);
	return (
		<>
			{title && (
				<SectionCover
					coverImg={coverImg}
					title={title}
					description={description}
				/>
			)}
			<div className='container'>
				<div className='grid lg:grid-cols-2 gap-10 my-16'>
					{items.map(item => (
						<MenuItem key={item._id} item={item}></MenuItem>
					))}
				</div>
				<div className='text-center'>
					<Link to={`/our-shop/${title || 'all'}`}>
						<button className='btn-custom'>{btnText}</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default MenuCategory;
