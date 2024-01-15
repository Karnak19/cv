import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { GlobeIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Basile Vernouillet",
  initials: "BV",
  location: "Capbreton, France, CET",
  locationLink: "https://www.google.com/maps/place/Capbreton",
  about: "Lead Frontend Developer, with fluent backend knowledge.",
  summary:
    // "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
    "As a Lead frontend Developer, I built the frontend architecture of multiple products from 0 to 1. Can lead frontend teams effectively, making sure everyone enjoy what they do and give their best. Currently, I work mostly with TypeScript, React and Node.js.",
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
      company: "Origins Digital",
      link: "https://origins-digital.com",
      badges: [],
      title: "Lead Frontend Developer",
      start: "2021",
      end: "",
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
    "GraphQL",
    "tRPC",
    "Prisma",
    "Docker",
  ],
  projects: [
    {
      title: "Airsoft-Market",
      techStack: ["Side Project", "Next.js", "Prisma", "Firebase", "NeonDB"],
      description:
        "Marketplace for airsoft players. Buy and sell your airsoft gear",
      link: {
        label: "Airsoft-Market",
        href: "https://airsoft-market.store/",
      },
    },
    {
      title: "Origins OTT Platform",
      techStack: ["TypeScript", "Next.js", "Vercel"],
      description: "A platform for managing and distributing video content",
      link: {
        label: "origins-digital.com",
        href: "https://www.origins-digital.com/_page__ott",
      },
    },
    {
      title: "Origins Sportkit Platform",
      techStack: ["TypeScript", "Next.js", "Vercel", "tRPC"],
      description:
        "A platform for managing and distributing content for sport clubs, federations and leagues",
      link: {
        label: "origins-digital.com",
        href: "https://www.origins-digital.com/_page__sportlab",
      },
    },
    {
      title: "Handball TV",
      techStack: ["TypeScript", "Next.js"],
      description:
        "OTT platform for french handball fans. Watch live games and replays. Based on Origins OTT Platform",
      link: {
        label: "HandballTV",
        href: "https://handballtv.fr/",
      },
    },
    {
      title: "FFGolf TV",
      techStack: ["TypeScript", "Next.js"],
      description:
        "OTT platform for french golf federation. Based on Origins OTT Platform",
      link: {
        label: "FFGolf TV",
        href: "https://ffgolf.tv/",
      },
    },
    {
      title: "FIM Moto TV",
      techStack: ["TypeScript", "Next.js"],
      description:
        "OTT platform for FIM (Fédération Internationale de Motocyclisme). Based on Origins OTT Platform",
      link: {
        label: "FIM Moto",
        href: "https://fim-moto.tv/",
      },
    },
    {
      title: "MauveTV",
      techStack: ["TypeScript", "Next.js"],
      description:
        "OTT platform for RSC Anderlecht. Based on Origins OTT Platform",
      link: {
        label: "MauveTV",
        href: "https://mauvetv.rsca.be/",
      },
    },
  ],
} as const;
