import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import useAuthContext from "../Hook/useAuthContext";

const Register = () => {
  const { createUser } = useAuthContext();
  const [registerError, setRegisterError] = useState("");
  const [showPassword, setShowPassword] = useState(false);


   // navigate
   const navigate = useNavigate();
   const location = useLocation();
   const from = location?.state || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log(name, photo, email, password);

   

    // create user
    createUser(email, password)
      .then((result) => {
        if (result.user) {
          navigate(from);
        }
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });

    // checked
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("give me a strong password");
      return;
    }

    // reset massage and success
    setRegisterError("");
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Your Photo Url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="flex text-center items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter a Password"
                  className="input input-bordered w-full"
                  required
                />
                <span
                  className=" end-10 absolute"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
          {/* error showing on display */}
          {registerError && <p className=" text-red-700">{registerError}</p>}
          <p className=" text-center mt-4">
            Already have an account{" "}
            <Link
              to="/login"
              className=" underline ml-1 text-blue-500 font-bold"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
