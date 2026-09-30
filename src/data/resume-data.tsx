import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { GlobeIcon } from "lucide-react";
import { projects } from "./projects";

export const RESUME_DATA = {
  name: "Basile Vernouillet",
  initials: "BV",
  location: "Capbreton, France, CET",
  locationLink: "https://www.google.com/maps/place/Capbreton",
  about: "Software Engineer — Agentic AI & Developer Tooling",
  summary:
    "Frontend engineer by background, now focused on agentic AI and the developer tooling that makes it usable in production. Built the frontend architecture of multiple products from 0 to 1; currently part of Royal Canin's AI System Team as an Ekino consultant, building agentic systems in production. Outside client work, builds personal projects solo — one of them reaching ~1M page views per month — and works AI-first with coding agents daily.",
  avatarUrl:
    "https://avatars.githubusercontent.com/u/7700494?v=4",
  personalWebsiteUrl: "https://basilevernouillet.com",
  contact: {
    email: "basile.vernouillet@gmail.com",
    tel: "+33658851518",
    social: [
      {
        name: "Website",
        url: "https://basilevernouillet.com",
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
      school: "Wild Code School",
      degree: "Web Development — PHP / Symfony",
      start: "2018",
      end: "2018",
    },
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
      description:
        "Agentic AI & developer tooling in production. Part of Royal Canin's AI System Team — agentic systems in production. Architected the Next.js frontend of Havas' internal AI platform AVA (multi-model LLM access, persistent context, workflow orchestration — rolled out to 23,000 employees) and built its internal AI code review system. Frontend at scale for Canal+ International. R&D on agent memory for coding harnesses (Claude Code, Codex, OpenCode) and model/tooling evaluation.",
    },
    {
      company: "Origins Digital",
      link: "https://origins-digital.com",
      badges: [],
      title: "Lead Frontend Developer",
      start: "2021",
      end: "2024",
      description:
        "Frontend architecture 0→1 for OTT and sports platforms (NSW Venues, Handball TV, FFGolf TV, FIM Moto TV). Led the frontend team from 2022 (previously Frontend Developer). Tech: TypeScript, React, Next.js, OpenAPI codegen, React Query, TailwindCSS, Vercel.",
    },
    {
      company: "Pytheas Capital Advisors",
      link: "https://pytheascapital.com",
      badges: [],
      title: "Lead Full Stack Developer",
      start: "2021",
      end: "2021",
      description:
        "Led full-stack development initiatives for financial technology solutions.",
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
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Agentic AI / LLM tooling",
    "TailwindCSS",
    "React Query",
    "tRPC",
    "GraphQL",
    "REST APIs",
    "Prisma",
    "Supabase",
    "PocketBase",
    "Convex",
    "Docker",
    "Vercel",
    "CI/CD",
  ],
  projects,
} as const;
