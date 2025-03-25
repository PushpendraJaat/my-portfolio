import { FaGithub } from "react-icons/fa6";
import Image from "next/image";
import Shop from "@/public/images/shop.jpeg";
import Youtube from "@/public/images/youtube-backend.jpeg";
import Blog from "@/public/images/blog.jpeg";
import AICody from "@/public/images/ai-cody.jpeg"
import Silent from "@/public/images/silent-feedback.jpeg"
import Link from "next/link";

const projects = [
  {
    title: "YouTube-like Video Sharing Platform Backend",
    description:
      "A secure video-sharing platform backend built with Node.js, Express.js, and Mongoose. This project features dynamic video management, detailed video pages, and user interaction functionalities, enhancing user engagement and efficiency. It includes secure user authentication, encrypted password storage, and cloud storage integration, ensuring a robust and scalable backend solution.",
    image: Youtube,
    liveLink: "",
    githubLink: "https://github.com/PushpendraJaat/videos-app-backend-like-youtube",
    tags: [
      "Express",
      "Multer",
      "JWT",
      "JavaScript",
      "Postman",
      "bcryptjs",
      "Tailwind CSS",
      "Cloudinary",
      "Cookie Parser"
    ],
  },
  {
    title: "Silent Feedback: Anonymous Messaging & Feedback Platform",
    description:
      "A full-stack web application that empowers organizations, educational institutions, and communities to collect honest, anonymous feedback. Silent Feedback offers a seamless user experience with modern design, robust security features, and real-time AI-generated message suggestions, ensuring privacy and enhancing communication across diverse environments.",
    image: Silent,
    liveLink: "https://silent-feedback.pushpendrajaat.in/",
    githubLink: "https://github.com/PushpendraJaat/Silent-Feedback",
    tags: [
      "Next.js",
      "NextAuth",
      "React",
      "React Hook Form",
      "TypeScript",
      "Axios",
      "Postman",
      "Resend API integration",
      "Tailwind CSS",
      "Gemini AI integration",
      "Shadcn"
    ],
  },

  {
    title: "MegaBlog Application with React and Appwrite",
    description:
      "MegaBlog is a modern blog application built with React and Appwrite, designed for creating, managing, and sharing blog posts effortlessly. This project integrates frontend frameworks with a backend-as-a-service (BaaS) platform to deliver seamless user experiences. Key features include user authentication, rich-text editor for writing posts, and a responsive, user-friendly UI. The secure backend with Appwrite ensures efficient data handling and robust performance.",
    image: Blog,
    liveLink: "https://mega-blog-react-appwrite.vercel.app/",
    githubLink: "https://github.com/PushpendraJaat/MegaBlog-React-Appwrite",
    tags: [
      "React.js",
      "Appwrite",
      "TinyMCE",
      "React Hook Form",
      "React Router",
      "JavaScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "AI-Powered Python Tutor 🐍🤖",
    description:
      "An interactive chat-based learning platform featuring AI tutors that teach Python dynamically. Built with Next.js and Google Gemini AI, it offers real-time code challenges, progress tracking with badges, and an intuitive UI using shadcn/ui. Optimized for seamless learning with debounced API requests and error-handling improvements.",
    image: AICody,
    liveLink: "https://skc-pushpendra-jaat-ai-powered-python-tutor.vercel.app/",
    githubLink: "https://github.com/PushpendraJaat/ai-powered-python-tutor",
    tags: ["Next.js", "Google Gemini AI", "NextAuth", "Shadcn", "MongoDB", "TypeScript", "Tailwind CSS"],
  },

  {
    title: "Modern Online Shopping Store",
    description:
      "A robust fullstack application for an online shopping store, built using Django. This project efficiently manages product listings, user authentication, and shopping cart functionalities, providing a solid foundation for a scalable and maintainable e-commerce platform.",
    image: Shop,
    liveLink: "",
    githubLink: "https://github.com/PushpendraJaat/Modern-Ecommerce-Store",
    tags: ["Django ", "SQLite", "Bootstrap", "JavaScript"],
  },
];

const Projects = () => {
  return (
    <div className="max-w-6xl mx-auto mt-12 xl:mt-20 mb-12 px-6 sm:px-16">
      <div className="font-extrabold text-3xl xl:text-4xl font-recoleta text-center">
        Projects
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-foreground border-neutral-600 border-2 rounded-xl p-4"
          >
            <div className="overflow-hidden rounded-lg">
              <Link href={project.liveLink} target="_blank">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg hover:scale-110 transition-transform duration-500"
                />
              </Link>
            </div>
            <div className="flex justify-between items-center gap-2 pt-4 pb-2 px-3">
              <Link
                href={project.liveLink}
                className="text-2xl font-bold font-inter"
              >
                {project.title}
              </Link>
              <Link href={project.githubLink} target="_blank">
                <FaGithub className="hover:scale-110 size-6" />
              </Link>
            </div>
            <div className="px-3 text-neutral-400 italic">
              {project.description}
            </div>
            <div className="flex flex-wrap gap-2 px-3 pt-4 text-xs lg:text-sm font-medium mb-2 items-center justify-start">
              {project.tags.map((tag, tagIndex) => (
                <div
                  key={tagIndex}
                  className="bg-[#2e2e2e] px-3 py-0.5 w-fit rounded-full"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
