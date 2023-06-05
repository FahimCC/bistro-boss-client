import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

const useMenu = () => {
	const {
		data: menu = [],
		isLoading: loading,
		refetch,
	} = useQuery({
		queryKey: ['menu'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/menu');
			return res.json();
			// axios.get('http://localhost:5000/menu').then(data => {
			// 	return data.data;
			// });
		},
	});

	return [menu, refetch, loading];
};

export default useMenu;

// const [menu, setMenu] = useState([]);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
// 	const loadMenu = async () => {
// 		const res = await fetch('http://localhost:5000/menu');
// 		const data = await res.json();
// 		setMenu(data);
// 		setLoading(false);
// 	};
// 	loadMenu();
// }, []);
