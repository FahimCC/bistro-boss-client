const SectionTitle = ({ heading, subHeading }) => {
	return (
		<div className='flex flex-col items-center mb-8 '>
			<p className='text-[#D99904] text-sm md:text-base'>
				<i>--- {subHeading} ---</i>
			</p>
			<h2 className='text-2xl md:text-4xl border-t-4  border-b-4 py-2 mt-3 max-w-fit px-5'>
				{heading}
			</h2>
		</div>
	);
};

export default SectionTitle;
