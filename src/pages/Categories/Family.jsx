import { CiLocationOn } from "react-icons/ci";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { TbToolsKitchen2 } from "react-icons/tb";


const Family = ({appertment}) => {
  const {image,estate_title, segment_name,description,price,status,} = appertment
  return (
    <div className="mt-16">
      
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card- text-xl font-bold ">Only For Family</h2>
          <h3 className=" text-lg ">Quality: {segment_name} </h3>
          <p>{description}</p>
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
          <div className="flex justify-between">
          <h5 className="text-xl font-bold text-black">Price: {price}</h5>
          <h5 className="text-xl font-bold text-black"> For: {status}</h5>
          </div>
          <div className="card-actions justify-end">
            <button className="btn  btn-outline btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Family;
