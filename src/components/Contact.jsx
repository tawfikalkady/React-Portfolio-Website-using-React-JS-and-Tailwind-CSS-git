/* eslint-disable no-unused-vars */
import React from "react";
import Headline from "../shared/Headline";

//motion animation
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <motion.div
      className="contact mx-auto mt-8 px-7"
      id="contact"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.2 }}
    >
      <Headline
        title={"CONTACT"}
        subtitle={`feel free to contact me by submitting the form below and i will
            get back to you as soon as possible`}
      />

      <div className="md:w-2/3 mx-auto bg-white md:px-16 px-8 py-8 rounded mb-32">
        <form action="">
          <label htmlFor="">name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter your name"
            className="p-5"
          />
          <label htmlFor="">email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter your email address"
            className="p-5"
          />
          <label htmlFor="">message</label>
          <textarea
            name="message"
            id="message"
            cols="80"
            rows="10"
            placeholder="enter your message"
            className="p-5 mb-8"
          ></textarea>
          <button className="btn px-14 py-4 shadow-sm">Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
