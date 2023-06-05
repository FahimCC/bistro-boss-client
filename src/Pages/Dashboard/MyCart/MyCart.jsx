import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle';
import useCart from '../../../hooks/useCart';

const MyCart = () => {
	const [cart, refetch] = useCart();
	const subTotal = cart.reduce((acc, cur) => acc + cur.price, 0);

	const handleDelete = id => {
		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',
		}).then(result => {
			if (result.isConfirmed) {
				fetch(`http://localhost:5000/carts/${id}`, {
					method: 'DELETE',
				})
					.then(res => res.json())
					.then(data => {
						console.log(data);
						if (data.deletedCount > 0) {
							refetch();
							Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
						}
					});
			}
		});
	};
	return (
		<div>
			<Helmet>
				<title>Bistro Boss | My Cart</title>
			</Helmet>

			<SectionTitle
				subHeading={'My Cart'}
				heading={'WANNA ADD MORE?'}
			></SectionTitle>

			<div className='container w-1/2 h-[700px] my-5 mx-auto bg-white rounded-lg '>
				<div className='w-full h-20 flex justify-evenly items-center gap-16 text-xl font-semibold'>
					<h2>Total Orders: {cart.length}</h2>
					<h2>Total Price: {subTotal}</h2>
					<button className='btn-custom'>PAY</button>
				</div>
				<div className='overflow-x-auto overflow-y-auto h-[600px]'>
					<table className='table w-full'>
						<thead>
							<tr>
								<td>#</td>
								<th>Item</th>
								<th>Name</th>
								<th>Price</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{cart.map((item, index) => (
								<tr key={item._id}>
									<td>{index + 1}</td>
									<td>
										<div className='avatar'>
											<div className='mask mask-squircle w-12 h-12'>
												<img
													src={item.image}
													alt='Avatar Tailwind CSS Component'
												/>
											</div>
										</div>
									</td>
									<td>{item.name}</td>
									<td className='text-left '>${item.price}</td>
									<th>
										<button
											onClick={() => handleDelete(item._id)}
											className='btn btn-error btn-sm'
										>
											<FaTrashAlt />
										</button>
									</th>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};

export default MyCart;
