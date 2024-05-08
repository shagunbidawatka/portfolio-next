import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles/styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tilt } from "react-tilt";
import { blogs } from "@/constants";

const Blogs = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          I read and write
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Blogs</h2>
      </motion.div>
      <div className="md:flex mt-20 mb-20 ">
        {blogs.map((item, index) => (
          <motion.div
            variants={fadeIn("up", "spring", 0.5, 0.75)}
            key={item?.id}
          >
            {" "}
            <a href={item?.url} target="_blank">
              <Tilt
                options={{
                  max: 45,
                  scale: 1,
                  speed: 450,
                }}
              >
                {" "}
                <div class={`tri ${item?.class}`}>
                  <i></i>
                </div>
              </Tilt>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Blogs, "blogs");
