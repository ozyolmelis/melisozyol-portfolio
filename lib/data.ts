import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import monsterslayerImg from "@/public/monsterslayer.png";
import learningresourcesImg from "@/public/learnresources.png";
import scorekeeperImg from "@/public/scorekeeper.png";
import tasktrackImg from "@/public/tasktrack.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Frontend Developer Intern",
    location: "Izmir, Turkey",
    description:
      "Utilized React, Redux, Next.js, and TypeScript for frontend development, enhancing design with Tailwind CSS. Worked on the backend using MongoDB and Nest.js, handling controllers, services and etc. fields. Proficient in Git for version control.",
    icon: React.createElement(LuGraduationCap),
    date: "2023, December - Still working",
  },
  {
    title: "Project Manager",
    location: "Remote",
    description:
      "Facilitated tech team communication, led website enhancements, generated reports, engaged with customers for solutions, and contributed to website migration.",
    icon: React.createElement(CgWorkAlt),
    date: "2023, July - 2023, November",
  },
] as const;

export const projectsData = [
  {
    title: "Task Track",
    description:
      "It is a minimalistic to-do list application, enabling efficient task management for users. The utilization of React Router facilitates smooth transitions between pages, enhancing the overall user experience.",
    tags: ["React.js", "Bootstrap"],
    imageUrl: tasktrackImg,
  },
  {
    title: "The Learning Resources App",
    description:
      "I was able to create a user-friendly interface and implement responsive design to ensure a seamless experience across different devices with Vue.js.",
    tags: ["JavaScript", "Vue.js"],
    imageUrl: learningresourcesImg,
  },
  {
    title: "Score Keeper Game",
    description:
      "Recording the score for two-player games, determining the winner and loser when the specified number is reached.",
    tags: ["HTML", "CSS", "Bulma", "JavaScript"],
    imageUrl: scorekeeperImg,
  },
  {
  title: "Monster Slayer Game",
    description:
      "A simple web based game where you fight a monster. After the game has started, the player can defend himself, heal or attack when it's his turn.",
    tags: ["HTML", "CSS", "JavaScript", "Vue.js"],
    imageUrl: monsterslayerImg,
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vue.js",
  "Next.js",
  "Node.js",
  "Redux",
  "Git",
  "Tailwind",
  "Bulma",
  "Bootstrap",
  "MongoDB",
  "GraphQL",
  "Framer Motion",
] as const;
