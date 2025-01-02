import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { GlobeIcon } from "lucide-react";
import { projects } from "./projects";

export const RESUME_DATA = {
  name: "Basile Vernouillet",
  initials: "BV",
  location: "Capbreton, France, CET",
  locationLink: "https://www.google.com/maps/place/Capbreton",
  about: "Lead Frontend Developer, with fluent backend knowledge.",
  summary:
    "As a Lead Frontend Developer, I built the frontend architecture of multiple products from 0 to 1. Can lead frontend teams effectively, making sure everyone enjoy what they do and give their best. Currently, I work mostly with TypeScript, React and Node.js. I am also building my own products/projects with NextJS, React, Node.js, Prisma, Supabase, Pocketbase, Docker, and more.",
  avatarUrl:
    "https://basile.vernouillet.dev/_next/image?url=/_next/static/media/avatar.b1edd67d.webp&w=256&q=100",
  personalWebsiteUrl: "https://basile.vernouillet.dev",
  contact: {
    email: "basile.vernouillet@gmail.com",
    tel: "+33658851518",
    social: [
      {
        name: "Website",
        url: "https://basile.vernouillet.dev",
        icon: GlobeIcon,
      },

      {
        name: "GitHub",
        url: "https://github.com/Karnak19",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/basile-vernouillet/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/bazbazeo",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Lycée Bahuet",
      degree: "BTS SIO SLAM",
      start: "2013",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Ekino",
      link: "https://ekino.com",
      badges: [],
      title: "Ingénieur Expert Adjoint",
      start: "2024",
      end: "",
      description: "Develop and maintain web appplications built with React and NextJS.",
    },
    {
      company: "Origins Digital",
      link: "https://origins-digital.com",
      badges: [],
      title: "Lead Frontend Developer",
      start: "2021",
      end: "2024",
      description:
        "Build frontend part of our OTT platform. Techs: TypeScript, React, Next.js, OpenAPI codegen, Vercel, Taiwindcss, React-query, and more.",
    },
    {
      company: "Pytheas Capital Advisors",
      link: "https://pytheascapital.com",
      badges: [],
      title: "Lead Full Stack Developer",
      start: "2021",
      end: "2021",
      description: "",
    },
    {
      company: "Wild Code School",
      link: "https://wildcodeschool.com",
      badges: [],
      title: "React Node.js Trainer",
      start: "2019",
      end: "2021",
      description:
        "Train and teach students to become Full Stack Developers. From zero to hero in 5 months. Techs: Linux,Git, React, Node.js, SQL, CI/CD, and more.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Pocketbase",
    "Supabase",
    "GraphQL",
    "tRPC",
    "Prisma",
    "Docker",
  ],
  projects,
} as const;
