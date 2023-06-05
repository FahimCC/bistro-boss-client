import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import { RiAdminFill } from 'react-icons/ri';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllUser = () => {
	const [axiosSecure] = useAxiosSecure();
	const { data: users = [], refetch } = useQuery(['users'], async () => {
		const res = await axiosSecure.get('/users');
		return res;
	});

	const handleMakeAdmin = user => {
		axios.patch(`http://localhost:5000/users/admin/${user._id}`).then(data => {
			if (data.data.modifiedCount > 0) {
				refetch();
				Swal.fire({
					position: 'top-end',
					icon: 'success',
					title: `${user.name} is an admin now`,
					showConfirmButton: false,
					timer: 1500,
				});
			}
		});
	};

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
				axios.delete(`http://localhost:5000/users/${id}`).then(data => {
					console.log(data.data);
					if (data.data.deletedCount > 0) {
						refetch();
						Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
					}
				});
			}
		});
	};

	return (
		<div className='bg-[#f6f6f6] h-full'>
			<div>
				<Helmet>
					<title>Bistro Boss | All Users</title>
				</Helmet>

				<SectionTitle
					subHeading={'How Many'}
					heading={'MANAGE ALL USERS'}
				></SectionTitle>

				<div className='container'>
					<div className='w-3/5 min-h-fit h-[700px] py-5 mx-auto bg-white rounded-lg '>
						<div className='w-full h-20 flex justify-evenly items-center text-xl font-semibold'>
							<h2 className='text-start'>Total Users: {users.length}</h2>
						</div>
						<div className='overflow-x-auto overflow-y-auto min-h-fit  h-[600px]'>
							<table className='table table-zebra w-4/5 mx-auto text-center'>
								<thead className='rounded-tr-lg'>
									<tr className='rounded-tr-lg'>
										<th>#</th>
										<th>Name</th>
										<th>Email</th>
										<th>Role</th>
										<th>Action</th>
									</tr>
								</thead>
								<tbody>
									{users.map((user, index) => (
										<tr key={user._id}>
											<td>{index + 1}</td>
											<td>{user.name}</td>
											<td>{user.email}</td>
											<td>
												{user.role === 'admin' ? (
													<button className='btn btn-outline btn-warning btn-sm'>
														Admin
													</button>
												) : (
													<button
														onClick={() => handleMakeAdmin(user)}
														className='btn btn-warning btn-sm'
													>
														<RiAdminFill />
													</button>
												)}
											</td>
											<td>
												<button
													onClick={() => handleDelete(user._id)}
													className='btn btn-error btn-sm'
												>
													<FaTrashAlt />
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllUser;

// fetch(`http://localhost:5000/users/admin/${user._id}`, {
// 	method: 'PATCH',
// })
// 	.then(res => res.json())
// 	.then(data => {
// 		if (data.modifiedCount > 0) {
// 			refetch();
// 			Swal.fire({
// 				position: 'top-end',
// 				icon: 'success',
// 				title: `${user.name} is an admin now`,
// 				showConfirmButton: false,
// 				timer: 1500,
// 			});
// 		}
// 	});
