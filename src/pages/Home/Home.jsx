import Banner from "../../Component/Banner";
import Footer from "../../Component/Footer";
import Appertment from "../Categories/Appertment/Appertment";
import Family from "../Categories/Family";
import Student from "../Categories/Student";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Appertment></Appertment>
            <Family></Family>
            <Student></Student>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;