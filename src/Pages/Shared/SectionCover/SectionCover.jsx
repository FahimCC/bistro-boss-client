import './SectionCover.css';

const SectionCover = () => {
	return (
		<div className='my-32'>
			<div className='bg-image h-[350px] lg:h-[500px]'>
				<div className='flex justify-center items-center h-[350px] lg:h-[500px]'>
					<div className='bg-black bg-opacity-60 text-white h-fit text-center  text-xs md:text-base py-5 md:py-14 lg:py-20 lg:mx-28 mx-5 px-3 lg:px-32'>
						<h1 className='text-4xl font-cinzel mb-3'>Bistro Boss</h1>
						<p className=''>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Necessitatibus, libero accusamus laborum deserunt ratione dolor
							officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
							nihil iusto ducimus incidunt quibusdam nemo.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionCover;
