/* eslint-disable react/no-unescaped-entities */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaRegEye , FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
    const {signUser} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)


    const handleSignIn = e =>{
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        console.log(form.get('email'))
        console.log(email, password)
        signUser(email, password)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error =>{
          console.log(error)
        })
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
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
                type={showPassword ? 'text' : "password"}
                name="password"
                placeholder="Enter a Password"
                className="input input-bordered w-full"
                required
              />
              <span className=" end-10 absolute" onClick={() => {
                setShowPassword(!showPassword)
              }}>
                {
                  showPassword ? <FaRegEyeSlash/> : <FaRegEye/>
                }
              </span>
              </div>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <p className=" text-center mt-4">
          Don't have an account{" "}
          <Link to="/register" className=" text-blue-500 font-bold ml-1 underline">
            Register
          </Link>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
