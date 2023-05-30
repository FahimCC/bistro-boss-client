const MenuItem = ({ item }) => {
	return (
		<div className='flex flex-col md:flex-row gap-5'>
			<img
				className='w-[100px] h-[80px]'
				style={{ borderRadius: '0px 200px 200px 200px' }}
				src={item.image}
				alt=''
			/>
			<div className='flex justify-between items-center gap-5'>
				<div>
					<h4 className='text-lg font-cinzel'>{item.name} ----</h4>
					<p className='text-sm md:text-base'>{item.recipe}</p>
				</div>
				<p className='text-[#BB8506]'>${item.price}</p>
			</div>
		</div>
	);
};

export default MenuItem;
