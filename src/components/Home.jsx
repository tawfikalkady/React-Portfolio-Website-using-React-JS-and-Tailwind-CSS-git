/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import Linkedin from "../assets/socials/linkedin.svg";
import Twiter from "../assets/socials/twitter.svg";
import Youtube from "../assets/socials/youtube.svg";
import Github from "../assets/socials/github.svg";
import Books from "../assets/socials/book.svg";

import { TypeAnimation } from "react-type-animation";
//motion animation
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="hero h-screen flex items-center justify-center " id="home">
      <motion.div
        className="text-center md:w-1/2  "
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount:0.7 }}
      >
        <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8 ">
          HEY, I'AM TAWFIK MOHAMED
        </h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "We produce Qullity Web Animation",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "We produce food for Hamsters",
            1000,
            "We produce food for Guinea Pigs",
            1000,
            "We produce food for Chinchillas",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
          className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 
      to-pink-600 "
        />
        <p className="text-light text-xl my-8  ">a frontend focus web developer building the frontend of websites
        and web applications that leads to the sucess of overall product</p>
        <button className="btn py-4 px-16  ">projects</button>
      </motion.div>

      {/* hero social */}
      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 lg:visible md-block">
        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500  "
          >
            <img src={Linkedin} alt="" className="w-10 h-10" />
          </a>
        </div>

        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500  "
          >
            <img src={Twiter} alt="" className="w-10 h-10" />
          </a>
        </div>

        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500  "
          >
            <img src={Youtube} alt="" className="w-10 h-10" />
          </a>
        </div>

        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500  "
          >
            <img src={Github} alt="" className="w-10 h-10" />
          </a>
        </div>

        <div className="py-1">
          <a
            href=""
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500  "
          >
            <img src={Books} alt="" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
