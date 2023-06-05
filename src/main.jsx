import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes.jsx';
import './index.css';
import AuthProvider from './providers/AuthProvider.jsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<AuthProvider>
		<HelmetProvider>
			<QueryClientProvider client={queryClient}>
				<div className='font-inter'>
					<RouterProvider router={router} />
				</div>
			</QueryClientProvider>
			<Toaster />
		</HelmetProvider>
	</AuthProvider>
	// </React.StrictMode>
);
