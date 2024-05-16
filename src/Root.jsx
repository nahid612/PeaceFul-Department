import { Outlet } from "react-router-dom";
import Navber from "./Component/Navber";
import Footer from "./Component/Footer";
import AuthProvider from "./AuthProvider/AuthProvider";



const Root = () => {
    return (
        <div >
            <div className=" lg:mx-24 md:mx-12 mx-4">
            <Navber></Navber>
            <AuthProvider text={'hello'} text2={'world'}>
                <button>Click me</button>
            </AuthProvider>
            <Outlet></Outlet>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;