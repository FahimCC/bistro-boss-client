import { useContext } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';
import { AuthContext } from '../../../providers/AuthProvider';

const MenuCard = ({ item, isPrice }) => {
	const { user } = useContext(AuthContext);
	const [, refetch] = useCart();
	const location = useLocation();
	const navigate = useNavigate();
	const { _id, image, price, name, recipe } = item;

	const addToCart = item => {
		console.log(item);
		if (user && user.email) {
			const orderItem = {
				menuItemId: _id,
				image,
				price,
				name,
				recipe,
				email: user.email,
			};
			fetch('http://localhost:5000/carts', {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify(orderItem),
			})
				.then(res => res.json())
				.then(data => {
					if (data.insertedId) {
						refetch();
						toast.success('Item added on the cart.');
					}
				});
		} else {
			toast.success('Please login first...');
			navigate('/login', { state: { from: location } });
			// return <Navigate to='/login' state={{ from: location }}></Navigate>;
		}
	};

	return (
		<div className='w-full card rounded-none bg-base-100 shadow-xl max-h-[520px]'>
			<figure className='max-w-md h-72'>
				<img
					className='w-full h-full object-cover '
					src={item.image}
					alt='Food'
				/>
			</figure>
			{isPrice && (
				<p className='absolute top-4 right-4 bg-black bg-opacity-70 text-white px-4 py-2 rounded-lg'>
					${item.price}
				</p>
			)}
			<div className='card-body text-center h-64'>
				<h2 className=' text-xl font-semibold'>{item.name}</h2>
				<p>{item.recipe}</p>
				<div className='card-actions justify-center'>
					<button onClick={() => addToCart(item)} className='btn-custom'>
						ADD TO CART
					</button>
				</div>
			</div>
		</div>
	);
};

export default MenuCard;
