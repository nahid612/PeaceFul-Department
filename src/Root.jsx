import { Outlet } from "react-router-dom";
import Navber from "./Component/Navber";
import AuthProvider from "./AuthProvider/AuthProvider";



const Root = () => {
    return (
        <div >
            <div className=" lg:mx-24 md:mx-12 mx-4">
            <Navber></Navber>
            <AuthProvider >
            </AuthProvider>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;