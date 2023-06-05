import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import useAdmin from '../hooks/useAdmin';
import { AuthContext } from '../providers/AuthProvider';

const AdminRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	const [isAmin, isAdminLoading] = useAdmin();

	if (loading || isAdminLoading) {
		return <Loading />;
	}
	if (user && isAmin) {
		return children;
	} else {
		return <Navigate to='/login' state={{ from: location }}></Navigate>;
	}
};

export default AdminRoute;
