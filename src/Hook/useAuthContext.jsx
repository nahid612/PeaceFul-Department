import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const useAuthContext = () => {
    const useAuth = useContext(AuthContext)
    return useAuth
}

export default useAuthContext;