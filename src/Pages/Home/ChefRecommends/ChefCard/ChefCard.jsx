import img from '../../../../assets/home/slide1.jpg';

const ChefCard = () => {
	return (
		<div className='w-full card gap-10 rounded-none bg-base-100 shadow-xl'>
			<figure className='max-w-md h-fit'>
				<img className='w-full h-72 object-cover ' src={img} alt='Food' />
			</figure>
			<div className='card-body text-center'>
				<h2 className=' text-xl font-semibold'>Caeser Salad</h2>
				<p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
				<div className='card-actions justify-center'>
					<button className='btn-custom'>ADD TO CART</button>
				</div>
			</div>
		</div>
	);
};

export default ChefCard;
