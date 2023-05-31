import { Vortex } from 'react-loader-spinner';

const Loading = () => {
	return (
		<div className='flex justify-center items-center h-[calc(100vh-88px)]'>
			<Vortex
				visible={true}
				height='200'
				width='200'
				ariaLabel='vortex-loading'
				wrapperStyle={{}}
				wrapperClass='vortex-wrapper'
				colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
			/>
		</div>
	);
};

export default Loading;
