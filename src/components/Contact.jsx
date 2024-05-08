import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles/styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import EarthCanvas from "./Common/Earth";
import { IoMail } from "react-icons/io5";
import { ImPacman } from "react-icons/im";
import { FaLinkedin, FaHashnode, FaLocationDot } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 0,
      y: mousePosition.y - 0,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#fff",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div
      className={`md:mt-20 flex xl:flex-row flex-col gap-10 overflow-hidden items-center md:w-full w-fit`}
    >
      <motion.div
        className="animate-cursor"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1"
      >
        <h2
          className="h2 hover-this"
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
        >
          Why be shy <span className={styles.sectionHeadText}>Say hi!</span>
        </h2>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-black-100 md:p-8 p-4 rounded-2xl xl:mt-20 "
        >
          <div className="flex md:gap-10 align-middle items-center gap-4">
            {" "}
            <IoMail color="#fff" size={24} />
            <h1 className="font-bold md:text-2xl text-l">
              shagunbidawatka665@gmail.com
            </h1>
          </div>
          <div className="flex md:gap-10 gap-4 align-middle items-center	mt-12">
            {" "}
            <ImPacman color="#fff" size={24} />
            <h1 className="font-bold md:text-2xl text-xl">
              <a href="https://topmate.io/shagun" target="_blank">
                topmate.io/shagun
              </a>
            </h1>
          </div>
          <div className="flex md:gap-10 gap-4 align-middle items-center	mt-12">
            {" "}
            <FaLocationDot color="#fff" size={24} />
            <h1 className="font-bold md:text-2xl text-xl">
              HSR layout, Bangalore
            </h1>
          </div>

          <div className="mt-24">
            <p className="text-2xl">Let's be friends</p>
            <div className="flex gap-10 mt-12">
              <a
                href="https://www.linkedin.com/in/shagun-bidawatka/"
                target="_blank"
              >
                <FaLinkedin color="#fff" size={54} />
              </a>
              <a
                href="https://www.instagram.com/shagun_bidawatka/?igshid=c24zdzB1eXJ0ZnM0"
                target="_blank"
              >
                <FaInstagramSquare color="#fff" size={54} />
              </a>
              <a href="https://shagun.hashnode.dev/" target="_blank">
                <FaHashnode color="#fff" size={54} />
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-[0.85] md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
