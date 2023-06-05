import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useMenu from '../../../hooks/useMenu';

const ManageItems = () => {
	const [menu, refetch] = useMenu();
	const [axiosSecure] = useAxiosSecure();

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
				axiosSecure.delete(`/carts/${id}`).then(data => {
					console.log(data);
					if (data.deletedCount > 0) {
						refetch();
						Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
					}
				});
			}
		});
	};

	const handleUpdate = id => {
		//TODO: Update
		console.log('update id:', id);
	};

	return (
		<div>
			<Helmet>
				<title>Bistro Boss | Manage Items</title>
			</Helmet>

			<SectionTitle
				subHeading={'Hurry Up!'}
				heading={'MANAGE ALL ITEMS'}
			></SectionTitle>

			<div className='container w-1/2 h-[700px] my-5 mx-auto bg-white rounded-lg '>
				<div className='w-full h-20 flex justify-evenly items-center gap-16 text-xl font-semibold'>
					<h2>Total Items: {menu.length}</h2>
				</div>
				<div className='overflow-x-auto overflow-y-auto h-[600px]'>
					<table className='table w-full'>
						<thead>
							<tr>
								<td>#</td>
								<th>Item</th>
								<th>Name</th>
								<th>Price</th>
								<th>Update</th>
								<th>Delete</th>
							</tr>
						</thead>
						<tbody>
							{menu.map((item, index) => (
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
									<td className='text-right '>${item.price}</td>
									<th>
										<button
											onClick={() => handleUpdate(item._id)}
											className='btn btn-warning btn-sm'
										>
											<FiEdit />
										</button>
									</th>
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

export default ManageItems;
