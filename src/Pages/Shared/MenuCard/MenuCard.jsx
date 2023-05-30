const ChefCard = ({ item, price }) => {
	return (
		<div className='w-full card rounded-none bg-base-100 shadow-xl max-h-[520px]'>
			<figure className='max-w-md h-72'>
				<img
					className='w-full h-full object-cover '
					src={item.image}
					alt='Food'
				/>
			</figure>
			{price && (
				<p className='absolute top-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg'>
					${item.price}
				</p>
			)}
			<div className='card-body text-center h-64'>
				<h2 className=' text-xl font-semibold'>{item.name}</h2>
				<p>{item.recipe}</p>
				<div className='card-actions justify-center'>
					<button className='btn-custom'>ADD TO CART</button>
				</div>
			</div>
		</div>
	);
};

export default ChefCard;
