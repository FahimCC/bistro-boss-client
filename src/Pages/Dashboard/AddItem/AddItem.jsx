import axios from 'axios';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { ImSpoonKnife } from 'react-icons/im';
import Swal from 'sweetalert2';
import SectionTitle from '../../../components/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddItem = () => {
	const [axiosSecure] = useAxiosSecure();

	const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	const onSubmit = data => {
		// console.log(data);
		const formData = new FormData();
		formData.append('image', data.image[0]);

		axios.post(image_hosting_url, formData).then(imageRes => {
			// console.log(imageRes);
			if (imageRes.data.success) {
				data.image = imageRes.data.data.display_url;
				data.price = parseFloat(data.price);
				// console.log(data);

				axiosSecure.post('/menu', data).then(data => {
					if (data.insertedId) {
						reset();
						Swal.fire({
							position: 'top-end',
							icon: 'success',
							title: 'Your work has been saved',
							showConfirmButton: false,
							timer: 1500,
						});
					}
				});
			}
		});
	};
	console.log(errors);
	return (
		<div className='container bg-white'>
			<Helmet>
				<title>Bistro Boss | Add Item</title>
			</Helmet>
			<SectionTitle
				subHeading={"What's new?"}
				heading={'ADD AN ITEM'}
			></SectionTitle>
			<div className='bg-[#F3F3F3] rounded-lg lg:mx-20'>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='p-5 md:p-10 space-y-5'
				>
					<div className='form-control w-full '>
						<label className='label'>
							<span className='label-text'>Recipe Name*</span>
						</label>
						<input
							type='text'
							placeholder='Recipe Name*'
							{...register('name', { required: true })}
							className='input input-bordered w-full '
						/>
					</div>
					<div className='flex gap-10'>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Category*</span>
							</label>
							<select
								{...register('category', { required: true })}
								defaultValue={'Select Category'}
								className='select select-bordered w-full'
							>
								<option disabled>Select Category</option>
								<option>salad</option>
								<option>soup</option>
								<option>pizza</option>
								<option>dessert</option>
								<option>drinks</option>
								<option>deshi</option>
							</select>
						</div>
						<div className='form-control w-full '>
							<label className='label'>
								<span className='label-text'>Price*</span>
							</label>
							<input
								type='text'
								placeholder='Price*'
								{...register('price', { required: true })}
								className='input input-bordered w-full '
							/>
						</div>
					</div>
					<div className='form-control'>
						<label className='label'>
							<span className='label-text'>Recipe Details</span>
						</label>
						<textarea
							{...register('recipe', { required: true })}
							className='textarea textarea-bordered h-24'
							placeholder='Recipe Details'
						></textarea>
					</div>
					<div className='form-control '>
						<input
							type='file'
							placeholder="You can't touch this"
							{...register('image', { required: true })}
							className='file-input file-input-bordered w-full max-w-xs file-input-[#B58130]'
						/>
					</div>
					<div className='text-center'>
						<button type='submit' className='btn bg-[#B58130]'>
							Add Item <ImSpoonKnife className='text-2xl' />
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddItem;
