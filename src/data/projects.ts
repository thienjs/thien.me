import placeholderimage from "/public/nsk.png"
// Frontend Mentor challenges repository
const challengesRepo =
  "https://github.com/";

export const tags = [
  "javascript",
  "front-end",
  "back-end",
  "full-stack",
  "animation",
  "sass",
  "tailwindcss",
  "HTML & CSS",
  "react",
  "vue",
  "vitejs",
  "nextjs",
  "express",
  "prisma",
  "typescript",
  "API",
];

export type Project = {
  title: string;
  tags: string[];
  repo: string;
  live: string;
  image: StaticImageData;
};

export const projects: Project[] = [
  {
    title: "3-column preview card component",
    tags: ["frontend-mentor", "front-end", "vue"],
    repo: `${challengesRepo}/3-column-preview-card-component-main`,
    live: "https://3-column-preview-card-component-main-swart.vercel.app",
    image: placeholderimage,
  },
  {
    title: "Loopstudios landing page",
    tags: ["frontend-mentor", "front-end", "nextjs", "tailwindcss"],
    repo: `${challengesRepo}/loopstudios-landing-page`,
    live: "https://loopstudios-landing-page-zeta.vercel.app",
    image: placeholderimage,
  },
  {
    title: "REST Countries API with color theme switcher",
    tags: [
      "frontend-mentor",
      "front-end",
      "tailwindcss",
      "nextjs",
      "typescript",
      "API",
    ],
    repo: `${challengesRepo}/rest-countries-api-with-color-theme-switcher`,
    live: "https://rest-countries-api-with-color-theme-switcher-nine.vercel.app",
    image: placeholderimage,
  },
  {
    title: "Social proof section",
    tags: ["frontend-mentor", "front-end", "HTML & CSS", "animation"],
    repo: `${challengesRepo}/social-proof-section-master`,
    live: "https://social-proof-section-master-nine.netlify.app",
    image: placeholderimage,
  },
  {
    title: "Stats preview card component",
    tags: ["frontend-mentor", "front-end", "react", "vitejs"],
    repo: `${challengesRepo}/stats-preview-card-component-main`,
    live: "https://stats-preview-card-component-main-imadatyatalah.netlify.app",
    image: placeholderimage,
  },
  {
    title: "Sunnyside agency landing page",
    tags: ["frontend-mentor", "front-end", "react", "vitejs", "tailwindcss"],
    repo: `${challengesRepo}/sunnyside-agency-landing-page-main`,
    live: "https://sunnyside-agency-landing-page-imadatyatalah.netlify.app",
    image: placeholderimage,
  },
  {
    title: "Testimonials grid section",
    tags: ["frontend-mentor", "front-end", "HTML & CSS"],
    repo: `${challengesRepo}/testimonials-grid-section-main`,
    live: "https://testimonials-grid-section-main-imadatyatalah.netlify.app/",
    image: placeholderimage,
  },
  {
    title: "Time tracking dashboard",
    tags: ["frontend-mentor", "front-end", "react", "vitejs", "tailwindcss"],
    repo: `${challengesRepo}/time-tracking-dashboard-main`,
    live: "https://time-tracking-dashboard-main.netlify.app",
    image: placeholderimage,
  },
  {
    title: "Shortly URL shortening API",
    tags: ["frontend-mentor", "front-end", "nextjs", "API", "sass"],
    repo: `${challengesRepo}/url-shortening-api`,
    live: "https://url-shortening-api-imadatyatalah.vercel.app",
    image: placeholderimage,
  },

  {
    title: "Octocake",
    tags: ["full-stack", "nextjs", "express", "prisma", "typescript", "API"],
    repo: "https://github.com/Octocake-Dev/octocake",
    live: "https://octocake.netlify.app",
    image: placeholderimage,
  },
];