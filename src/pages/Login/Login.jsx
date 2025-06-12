import React, { useContext } from "react";
import img1 from "../../assets/Animation Login.json";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state || "/";
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    // Sign in with email and password
    signInUser(email, password)
      .then((result) => {
        console.log("User signed in:", result.user);
        navigate(from, { replace: true }); // Redirect to the previous page or home
      })
      .catch((error) => {
        console.log("Error signing in:", error);
      });
  };
  return (
    <div className="hero bg-white text-black min-h-screen">
      <div className="hero-content w-full flex">
        <div className="text-center hidden lg:block lg:text-left max-w-md">
          <Lottie animationData={img1}></Lottie>
        </div>
        <div className="card bg-white text-black  w-full max-w-sm shrink-0 shadow-2xl">
          <form
            onSubmit={handleLogin}
            className="card-body text-black font-bold "
          >
            <h2 className="text-3xl text-center">Login!</h2>

            <div className="fieldset">
              <label className="label ">Email</label>
              <input
                type="email"
                name="email"
                className="input bg-gray-200"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input bg-gray-200"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button
                type="submit"
                className="  btn btn-neutral mt-4 bg-gray-200 text-black font-bold"
              >
                Login
              </button>
              <div className=" text-center">Or <br /> Log in with </div>
              <SocialLogin />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
