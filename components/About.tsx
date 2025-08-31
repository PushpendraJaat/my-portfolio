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
        I&apos;m a <strong>full-stack developer with AI</strong> specializing in building robust, scalable, and user-friendly applications.
    Currently, I&apos;m working on cutting-edge projects using
    <strong> Next.js, React, Tailwind CSS, Node.js, Express, MongoDB, TypeScript, and Python</strong>.
    Whether it&apos;s developing dynamic web applications, crafting secure APIs, or integrating modern UI/UX designs with Framer Motion,
    I thrive on solving complex problems with innovative solutions. I&apos;m passionate about continuously learning new technologies and pushing the boundaries of what&apos;s possible. 
        </p>
      </WobbleCard>
    </div>
  );
};

export default About;
