import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const Experience: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16">
      <WobbleCard containerClassName="bg-blue-900 ">
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          Experience
        </h2>

        <div className="flex justify-between flex-col sm:flex-row text-neutral-300">
          <div>
            <h3 className="text-xl xl:text-2xl font-bold text-white">
              TCS
            </h3>
            <p className="sm:text-lg italic">Web Intern</p>
          </div>
          <div>
            <p className="sm:text-right text-base xl:text-lg">
              Aug 2024 – Sep 2025
            </p>
          </div>
        </div>

        <p className="mt-4 text-base xl:text-lg font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis consequatur fugiat dolorum ab, cupiditate mollitia esse velit commodi placeat facere porro repudiandae? Unde repellendus harum blanditiis, fuga aut explicabo beatae.
        </p>
      </WobbleCard>
    </div>
  );
};

export default Experience;
