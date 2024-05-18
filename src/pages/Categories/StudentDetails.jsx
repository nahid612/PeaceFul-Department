import { CiLocationOn } from "react-icons/ci";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";
import { useLoaderData } from "react-router-dom";

const StudentDetails = () => {
    const student = useLoaderData()
    console.log(student)
    return (
        <div className="mt-16">
      <p className=" text-4xl font-semibold text-center">
        Students Leaving Room
      </p>
      <hr className="mb-10 mt-2" />

      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className=" h-72"
            src={student.image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card- text-xl font-bold ">Estate: {student.estate_title}</h2>
          <h3 className=" text-lg ">Quality: {student.segment_name} </h3>
          <p>{student.description}</p>
          <div className="flex justify-between">
            <p className="flex items-center gap-1">
              <CiLocationOn />
              <span>Location: {student.location} </span>
            </p>
            <p className="flex items-center gap-1">
              <PiMapPinSimpleAreaLight />
              <span>Area: {student.area} sq ft</span>
            </p>
          </div>
          <div className="flex justify-between">
          <h5 className="text-xl font-bold text-black">Price: {student.price}</h5>
          <h5 className="text-xl font-bold text-black"> For: {student.status}</h5>
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

export default StudentDetails;