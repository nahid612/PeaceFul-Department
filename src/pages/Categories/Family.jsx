/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";
import { Link } from "react-router-dom";

const Family = ({ appertment }) => {
  const { image, segment_name, description, price, status,area, location,id} =
    appertment;
  return (
    <div className="mt-16">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card- text-xl font-bold ">Only For Family</h2>
          <h3 className=" text-lg ">Quality: {segment_name} </h3>
          <p>{description}</p>
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              <CiLocationOn />
              <span>Location:{location} </span>
            </p>
            <p className="flex items-center gap-1">
              <PiMapPinSimpleAreaLight />
              <span>Area: {area}sq ft</span>
            </p>
          </div>
          <div className="flex justify-between">
            <h5 className="text-xl font-bold text-black">Price: {price}</h5>
            <h5 className="text-xl font-bold text-black"> For: {status}</h5>
          </div>
          <div className="card-actions justify-end">
            <Link to={`/familydetails/${id}`}>
              <button className="btn  btn-outline btn-primary">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
