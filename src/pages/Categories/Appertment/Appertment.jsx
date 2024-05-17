import { CiLocationOn } from "react-icons/ci";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";

const Appertment = () => {
  return (
    <div className="mt-16">
      <p className=" text-4xl font-semibold text-center">
      Apartments & Rooms
      </p>
      <hr className="mb-10 mt-2" />

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card- text-xl font-bold ">Estate: </h2>
          <h3 className=" text-lg ">Quality: </h3>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              <CiLocationOn />
              <span>Location: </span>
            </p>
            <p className="flex items-center gap-1">
              <PiMapPinSimpleAreaLight />
              <span>Area: sq ft</span>
            </p>
          </div>
          <h5 className="text-xl font-bold text-black">Price: </h5>
          <div className="card-actions justify-end">
            <button className="btn  btn-outline btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appertment;
