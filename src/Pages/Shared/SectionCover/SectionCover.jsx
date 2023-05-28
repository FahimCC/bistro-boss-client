const SectionCover = ({ coverImg, title, description }) => {
	return (
		<div className='my-32'>
			<div
				style={{ backgroundImage: `url('${coverImg}')` }}
				className='bg-center bg-cover h-[350px] lg:h-[500px]'
			>
				<div className='container'>
					<div className='flex justify-center items-center h-[350px] lg:h-[500px]'>
						<div className='bg-black bg-opacity-60 text-white h-fit text-center  text-xs md:text-base py-5 md:py-14 lg:py-20 px-3 lg:px-48'>
							<h1 className='text-4xl font-cinzel mb-3'>{title}</h1>
							<p className=''>{description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionCover;
