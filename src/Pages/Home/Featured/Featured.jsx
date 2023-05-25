import moment from 'moment/moment';
import bgFeature from '../../../assets/home/featured.jpg';
import SectionTitle from '../../../components/SectionTitle';

const Featured = () => {
	return (
		<div
			className='bg-cover bg-center bg-fixed z-10 '
			style={{ backgroundImage: `url('${bgFeature}')` }}
		>
			<div className='bg-black bg-opacity-60'>
				<div className='container my-24 py-24 text-white max-w-full'>
					<SectionTitle
						subHeading={'Check it out'}
						heading={'FROM OUR MENU'}
					></SectionTitle>

					<div className='flex flex-col lg:flex-row items-center justify-center h-fit gap-10 md:px-10'>
						<div className='max-w-2xl max-h-96'>
							<img className='w-full h-full' src={bgFeature} alt='' />
						</div>
						<div>
							<p className='text-lg'>
								{moment().format('MMM D, YYYY')} <br />
								WHERE CAN I GET SOME?
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
								voluptate facere, deserunt dolores maiores quod nobis quas
								quasi. Eaque repellat recusandae ad laudantium tempore
								consequatur consequuntur omnis ullam maxime tenetur.
							</p>
							<button className='btn-custom mt-5'>READ MORE</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Featured;
