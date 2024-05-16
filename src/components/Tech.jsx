import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import BallCanvas from "./Common/Ball";

const Tech = () => {
  return (
    <div className="md:flex flex-row flex-wrap justify-center mt-20 hidden">
      {technologies.map((technology) => (
        <div className="md:w-28 md:h-28 w-20 h-20" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
