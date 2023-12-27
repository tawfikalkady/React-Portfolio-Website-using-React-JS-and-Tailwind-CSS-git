/* eslint-disable no-unused-vars */
import React from "react";
import Headline from "../shared/Headline";

import skills from '../../public/skills'

//motion animation
import { motion } from "framer-motion";
//variants
import { fadeIn } from "../variants";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto my-14 md:py-8 px-7 " id="about">
      <Headline
        title={"ABOUT ME"}
        subtitle={`here you will find some information about me,what i do, and my 
    current skills mostly in terms of programming and technology `}
      />
      {/* about content */}
      <div className="flex flex-col md:flex-row items-start justify-start">
        {/* left side */}
        <motion.div className="md:w-1/2 my-8 "
                variants={fadeIn("right", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount:0.7 }}
                >
          <h4 className="text-2xl font-bold mb-8  ">get to know me!</h4>
          <div className="md:w-10/12 text-lg text-[#666] mb-8 ">
            <p className="mb-5" >i am a <strong>frontend web developer  </strong> building the frontend of 
            websites and web applications that lead to the success of the overall product .check out some of
            my work in the <strong>projects</strong> section.  </p>
            <p className="mb-5">i also like sharing content related to the stuff that i have learned over the 
            years in <strong>web development</strong> so it can help other people of the dev community .feel
            free to connect or follow me on my <a href="" className="text-secondary font-bold 
            underline  ">linkedin</a> where i post useful content related to web development and programming </p>
          <p className="mb-5">i am open to <strong>jop</strong> opportunities where i can contribute, learn 
          and grow . if you have a good opportunity that match my skills and experience then do not hesitate 
          to <strong>contact</strong> me. </p>
          </div>
        </motion.div>
        {/* right side */}
        <motion.div className="md:w-1/2 my-8 "
                        variants={fadeIn("left", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount:0.5 }}
        >
          <h4 className="text-2xl font-bold mb-8">my skills</h4>
          <div className="flex flex-wrap gap-3 md:w-10/12">
            {
              skills.map(skill => <p key={skill.id} className="bg-slate-300 text-light py-2 px-4 
              rounded  ">{skill.title} </p> )
            }
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
