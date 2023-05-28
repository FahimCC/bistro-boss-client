import MenuItem from '../../../components/MenuItem';
import SectionCover from '../SectionCover/SectionCover';

const MenuCategory = ({ coverImg, title, description, items, btnText }) => {
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
					{items.map(menuItem => (
						<MenuItem key={menuItem._id} menuItem={menuItem}></MenuItem>
					))}
				</div>
				<div className='text-center'>
					<button className='btn-custom'>{btnText}</button>
				</div>
			</div>
		</>
	);
};

export default MenuCategory;
