import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import Image from "next/image";
import Tech from "./Tech";
import { Tilt } from "react-tilt";

const About = () => {
  return (
    <div>
      <div className="w-full mt-5 block md:flex">
        <div>
          <motion.div variants={textVariant()}>
            <h2 className={styles.sectionHeadText}>Hi there!</h2>
          </motion.div>

          <motion.div
            variants={textVariant()}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I’m Shagun, currently I live in Bangalore working as a frontend
            developer at topmate.io. My projects include UX design, UI
            animations, functionality implementations.
            <br /> <br /> Being comfortable with code allows me to rapidly
            prototype and validate experiences. I'm a skilled software developer
            with experience in TypeScript and JavaScript, and expertise in
            frameworks like React, Nextjs, and React native. I'm always eager to
            create efficient, scalable, and user-friendly solutions that solve
            real-world problems.
          </motion.div>
          <Tilt>
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="mt-4 md:hidden block"
            >
              <div class="box">
                <span></span>
                <Image
                  src={"/shagun.jpeg"}
                  unoptimized
                  alt="self"
                  width={500}
                  height={200}
                  style={{ borderRadius: "50%" }}
                  className="z-10"
                />
                <div class="border-blur"></div>
              </div>
            </motion.div>
          </Tilt>
          <Tech />
        </div>
        <div class="relative">
          <div class="bg-about"></div>
          <div class="bg bg2"></div>
          <div class="bg bg3"></div>
        </div>
        <div className="md:block hidden">
          <Tilt>
            <motion.div
              variants={slideIn("right", "tween", 0.2, 1)}
              className="mt-4 ml-10 "
            >
              <div class="box">
                <span></span>
                <Image
                  src={"/shagun.jpeg"}
                  unoptimized
                  alt="self"
                  width={500}
                  height={200}
                  style={{ borderRadius: "50%" }}
                  className="z-10"
                />
                <div class="border-blur"></div>
              </div>
            </motion.div>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
