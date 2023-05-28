const PageCover = ({ banner,title }) => {
	return (
		<div
			className='h-[400px] md:h-[500px] lg:h-[700px] w-full bg-cover bg-fixed bg-center'
			style={{ backgroundImage: `url('${banner}')` }}
		>
			<div className='container'>
				<div className='flex justify-center items-center h-[400px] md:h-[500px] lg:h-[700px]'>
					<div className='w-full bg-black bg-opacity-60 text-white h-fit text-center text-xs md:text-base py-10 md:py-14 lg:py-32 '>
						<h1 className='text-4xl md:text-7xl font-cinzel mb-3'>{title}</h1>
						<p className='uppercase'>Would you like to try a dish?</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PageCover;
