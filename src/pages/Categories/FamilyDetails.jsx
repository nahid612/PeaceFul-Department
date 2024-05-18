import { useLoaderData } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";


const FamilyDetails = () => {
  const family = useLoaderData();
  console.log(family);
  return (
    <div>
      <div className="mt-16">
        <p className=" text-4xl font-semibold text-center">
          Family Leaving Room
        </p>
        <hr className="mb-10 mt-2" />

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img className=" h-72" src={family.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card- text-xl font-bold ">
              Estate: {family.estate_title}
            </h2>
            <h3 className=" text-lg ">Quality: {family.segment_name} </h3>
            <p>{family.description}</p>
            <div className="flex justify-between">
              <p className="flex items-center gap-1">
                <CiLocationOn />
                <span>Location: {family.location} </span>
              </p>
              <p className="flex items-center gap-1">
                <PiMapPinSimpleAreaLight />
                <span>Area: {family.area} sq ft</span>
              </p>
            </div>
            <div className="flex justify-between">
              <h5 className="text-xl font-bold text-black">
                Price: {family.price}
              </h5>
              <h5 className="text-xl font-bold text-black">
                {" "}
                For: {family.status}
              </h5>
            </div>
            <div className="card-actions justify-end">
              <button className="btn  btn-outline btn-primary">
                Booking
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default FamilyDetails;
