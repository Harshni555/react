import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import react from "../assets/skills/react.png";
import bootstrap from "../assets/skills/bootstrap.png"
import node from "../assets/skills/node.png";
import js from "../assets/skills/js.png";
import express from "../assets/skills/express.png";
import materialui from "../assets/skills/materialui.png";

import front from "../assets/history/front.png";
import backend from "../assets/history/backend.png";
import ui from "../assets/history/ui.png";

import weather from "../assets/weather.jpeg";
import yoga from "../assets/yogaa.png";
import wine from "../assets/wineee.png";

export const skills = [
  {
    title: "HTML",
    imageSrc: html,
  },
  {
    title: "CSS",
    imageSrc: css,
  },
  {
    title: "React",
    imageSrc: react,
  },
  {
    title: "BOOTSTRAP",
    imageSrc: bootstrap,
  },
  {
    title: "Node",
    imageSrc: node,
  },
  {
    title: "JS",
    imageSrc: js,
  },
  {
    title: "EXPRESS",
    imageSrc: express,
  },
  {
    title: "MATERIALUI",
    imageSrc: materialui,
  },
];

export const history = [
  {
    role: "Frontend Developer (Self-Made Projects)",
    organisation: "Self-Learning Projects",
    startDate: "dec, 2023",
    endDate: "june 2024",
    experiences: ["Developed responsive web pages using HTML, CSS, JavaScript, and Bootstrap, while building interactive UIs with React. Implemented smooth navigation and user-friendly interfaces for seamless web experiences."],
    imageSrc: front,
  },
  {
    role: "Backend Developer (Fresher)",
    organisation: "Learning Projects",
    startDate: "sep, 2024",
    endDate: "present",
    experiences: ["Built RESTful APIs using Node.js and Express.js for user data management and authentication. Implemented CRUD operations and deployed backend services, gaining practical experience in JavaScript and server-side development."],
    imageSrc: backend,
  },
  {
    role: "UI Designer Intern (Learning Phase)",
    organisation: "personal projects",
    startDate: "july, 2024",
    endDate: "present",
    experiences: ["Designed and implemented responsive user interfaces using Material UI, ensuring consistency, usability, and a polished look across web applications."],
    imageSrc: ui,
  },
];

export const projects = [
  {
    title: "Project A",
    imageSrc: weather,
    description:
      "A weather app that allows users to check real-time weather information by entering a city name, displaying temperature, humidity, and weather conditions. It fetches data from a weather API and presents it in a user-friendly interface.",
    source: "https://harshni555.github.io/weather-project/",
  },
  {
    title: "Project B",
    imageSrc: yoga,
    description:
      "A yoga app offering workouts for users, designed to improve flexibility, strength, and mindfulness. It features personalized routines, and meditation practices to enhance overall wellbeing practice yoga at your own pace.",
    source: "https://harshni555.github.io/evolveyoga/",
  },
  {
    title: "Project C",
    imageSrc: wine,
    description:
      "A wine website offering a curated selection of fine wines from around the world, with detailed descriptions, ratings, and reviews. It provides an easy-to-use platform for exploring, Purchase different varieties of wine from across the world.",
    source: "https://harshni555.github.io/wine/",
  },
];