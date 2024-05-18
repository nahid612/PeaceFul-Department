import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../Hook/useAuthContext";


const PrivateRoute = ({children}) => {
    const {user} = useAuthContext()
    const location = useLocation()
    // console.log(location)

    if(!user) {
        return <Navigate to='/login' state={location?.pathname || '/'}/>
    }
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;