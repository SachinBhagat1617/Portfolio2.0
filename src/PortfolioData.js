import BoltFood from "./assets/BoltFood.png";
import EcomBackend from "./assets/EcomBackend.png";
import MTube from "./assets/MTube.png";
const header = {
  homepage: "",
  title: "Sachin Bhagat",
};
const about = {
  name: "Sachin Bhagat",
  role: ["FrontEnd Developer", "BackEnd Developer", "Full Stack Developer"],
  description:
    "I am an aspiring full-stack developer focused on MERN stack with experience in building responsive, interactive web applications. Passionate about learning new technologies and writing clean, efficient code.",
  resume:
    "https://drive.google.com/file/d/1q2fiVIlOaRX5SXvRitHYUW-c16U7uCi0/view?usp=sharing",
  social: {
    linkedin: "https://linkedin.com/in/sachinbhagat1",
    github: "https://github.com/sachinbhagat1617",
  },
};
const projects = [
  {
    name: "BoltFood",
    description:
      "A full-stack e-commerce food delivery platform that improved order processing efficiency. Built with the MERN stack (MongoDB, Express, React, Node.js), the responsive website includes secure user authentication, order management, and payment processing, optimized for real-time data updates and performance.",
    stack: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "Tailwind CSS"],
    image: BoltFood,
    sourceCode: "https://github.com/SachinBhagat1617/FoodOrder",
    livePreview: "https://food-order12-sachin-bhagats-projects.vercel.app/",
  },
  {
    name: "MTube",
    description:
      "Developed a dynamic YouTube-like video streaming application with advanced search and interaction features. Integrated a responsive hamburger sidebar using React.js and Tailwind CSS, a nested comments section via recursion, and a live chat section with API polling for real-time communication. Enhanced search responsiveness by 30% using debouncing techniques.",
    stack: ["ReactJs", "Redux", "Tailwind CSS"],
    image: MTube,
    sourceCode: "https://github.com/SachinBhagat1617/MTube",
    livePreview: "https://m-tube-nu.vercel.app/",
  },
  {
    name: "EcomBackend",
    description:
      "Developed a scalable backend for an e-commerce platform using Node.js, Express, and MongoDB. Features include secure user authentication with a forgot password option, comprehensive product management, and efficient cart handling to support a seamless shopping experience.",
    stack: ["NodeJs", "ExpressJs", "MongoDB"],
    image: EcomBackend,
    sourceCode: "https://github.com/sankitdev/YumRun",
    livePreview: "",
  },
];
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Tailwind CSS",
  "Material UI",
  "Git",
  "CI/CD",
  "Jest",
  "Enzyme",
];
const contact = {
  email: "contactbhagatsachin@gmail.com",
};

export { header, about, projects, skills, contact };
