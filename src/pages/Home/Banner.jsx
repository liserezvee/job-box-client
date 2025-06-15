import React from "react";
import * as motion from "motion/react-client";
import { easeIn, easeOut } from "motion";
import img1 from "../../assets/team/full-length-portrait-slim-female-office-worker-jeans-standing-with-legs-crossed-near-asian-colleague-indoor-photo-tall-african-student-glad-european-woman-with-laptop.jpg";
import img2 from "../../assets/team/team-working-animation-project.jpg";
const Banner = () => {
  return (
    <div className="hero bg-white text-black min-h-screen py-10">
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse items-center gap-8">
        {/* Images Section */}
        <div className="flex-1 flex flex-col items-center gap-6">
          <motion.img
            src={img1}
            animate={{ y: [50, 100, 50] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="w-48 sm:w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-b-sky-400"
          />
          <motion.img
            src={img2}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="w-48 sm:w-64 rounded-t-[40px] rounded-br-[40px] shadow-2xl border-l-4 border-b-4 border-b-sky-400"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 text-center lg:text-left">
          <motion.h1
            animate={{ x: 50 }}
            transition={{
              duration: 2,
              delay: 1,
              ease: "easeOut",
              repeat: Infinity,
            }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold"
          >
            Latest{" "}
            <motion.span
              animate={{ color: ["#ecff33", "#33ffe3", "#ff6133"] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Jobs
            </motion.span>{" "}
            For You!
          </motion.h1>
          <p className="py-4 px-4 sm:px-0">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn mt-2">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
