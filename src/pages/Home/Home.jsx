import { useLoaderData } from "react-router-dom";
import Banner from "../../Component/Banner";
import Footer from "../../Component/Footer";
import Appertment from "../Categories/Appertment/Appertment";
import Family from "../Categories/Family";
import Student from "../Categories/Student";

const Home = () => {
  const appertment = useLoaderData();
  console.log(appertment);
  return (
    <div>
      <Banner></Banner>
      <div>
        <p className=" text-4xl font-semibold text-center">
          Apartments & Rooms
        </p>
        <hr className="mb-10 mt-2" />
        {appertment.map((room) => (
          <Appertment key={appertment.id} appertment={room}></Appertment>
        ))}
      </div>
      <div>
        <p className=" text-4xl font-semibold text-center">
          Family House
        </p>
        <hr className="mb-10 mt-2" />
        {appertment.map((room) => (
          <Family key={appertment.id} appertment={room}></Family>
        ))}
      </div>
      <div>
        <p className=" text-4xl font-semibold text-center">
          Leaving room for Student
        </p>
        <hr className="mb-10 mt-2 flex gap-10  grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3" />
        {appertment.map((room) => (
          <Student key={appertment.id} appertment={room}></Student>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
