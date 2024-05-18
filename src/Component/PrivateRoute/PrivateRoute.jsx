import { Navigate, useLocation } from "react-router-dom";
import useAuthContext from "../../Hook/useAuthContext";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuthContext()
    const location = useLocation()
    console.log(location)

    if(loading){
        return <span className="loading loading-bars loading-lg text-center"></span>

    }

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