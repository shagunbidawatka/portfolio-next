import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/motion";
import ParticlesContainer from "./Common/ParticlesContainer";
import Avatar from "./Common/Avatar";
import Navbar from "./Navbar";

const HomePage = () => {
  return (
    <div className="bg-primary/60 w-full bg-heroBg bg-cover bg-no-repeat h-screen relative">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <Navbar />
        <ParticlesContainer />

        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left md:h-full h-fit md:pt-0 pt-20		 container mx-auto">
          {/* title */}
          <motion.h1
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            SHAGUN <br />
            BIDAWATKA
            {/* <span className="text-accent">Digital Reality</span> */}
          </motion.h1>
          <motion.h3
            variants={slideIn("right", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm pb-20 md:pb-0 mb-10 xl:mb-16 ml-auto h3 text-2xl hidden md:block"
          >
            Hi, I'm Shagun. I'm a{" "}
            <span className="text-accent font-bold ">Frontend developer</span>
            .
            <br />
            Turning ideas into reality.
          </motion.h3>
          <motion.h3
            variants={slideIn("right", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="pb-10 mb-10  h3 text-2xl block md:hidden"
          >
            I'm a{" "}
            <span className="text-accent font-bold ">Frontend developer</span>
            .
            <br />
            Turning ideas into reality.
          </motion.h3>
        </div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="md:w-full md:h-full w-3/4 left-[13%]	 max-w-[480px] max-h-[678px] absolute bottom-0 lg:left-[33%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default HomePage;
