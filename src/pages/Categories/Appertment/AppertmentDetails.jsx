import { CiLocationOn } from "react-icons/ci";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";
import { useLoaderData } from "react-router-dom";



const AppertmentDetails = () => {
  
    const appertInfo = useLoaderData()
    console.log(appertInfo)
    return (
    <div className="mt-16">
      <p className=" text-4xl font-semibold text-center">
        Appertment & Leaving Room
      </p>
      <hr className="mb-10 mt-2" />

      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className=" h-72"
            src={appertInfo.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card- text-xl font-bold ">Estate: {appertInfo.estate_title}</h2>
          <h3 className=" text-lg ">Quality: {appertInfo.segment_name} </h3>
          <p>{appertInfo.description}</p>
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              <CiLocationOn />
              <span>Location: {appertInfo.location} </span>
            </p>
            <p className="flex items-center gap-1">
              <PiMapPinSimpleAreaLight />
              <span>Area: {appertInfo.area} sq ft</span>
            </p>
          </div>
          <div className="flex justify-between">
          <h5 className="text-xl font-bold text-black">Price: {appertInfo.price}</h5>
          <h5 className="text-xl font-bold text-black"> For: {appertInfo.status}</h5>
          </div>
          <div className="card-actions justify-end">
          <button className="btn  btn-outline btn-primary">
              Booking
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default AppertmentDetails;
