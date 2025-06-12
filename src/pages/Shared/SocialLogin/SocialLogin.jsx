import React, { useContext } from "react";
import AuthContext from "../../../context/AuthContext/AuthContext";
import { FcGoogle } from "react-icons/fc";

import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state || "/";
  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        console.log("User signed in with Google:", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        log.error("Error signing in with Google:", error);
      });
  };
  return (
    <div className="text-center">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-neutral mt-2 w-full bg-gray-200 text-black font-boldl"
      >
        Google <FcGoogle />
      </button>
    </div>
  );
};

export default SocialLogin;
