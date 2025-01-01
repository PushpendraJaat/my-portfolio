import React from "react";
import { WobbleCard } from "./ui/wobble-card";

const About: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6 sm:px-16" id="about">
      <WobbleCard>
        <h2 className="text-3xl font-extrabold mb-4 text-left font-recoleta">
          About Me
        </h2>
        <p className="mt-4 text-neutral-200 mx-auto text-base xl:text-lg font-medium">
          I’m a <b>full-stack developer based in Bhopal</b>.
          I’m currently honing my skills while working on projects using
          <b>React, Express, MongoDB, Node.js, JavaScript, Django, and Python</b>. From building e-commerce platforms like
          <b> Online Shopping Store</b> to creating a compelete backend project like <b>YouTube</b>,
          I enjoy solving complex problems with innovative solutions. I’m passionate about learning
          new technologies and pushing the boundaries of what’s possible, always aiming to create
          user-friendly, scalable applications.
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;
