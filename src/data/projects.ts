import placeholderimage from "/public/nsk.png"
// Frontend Mentor challenges repository
const myGithub =
  "https://github.com/thienjs";

export const tags = [
  "javascript",
  "front-end",
  "storybook",
  "discord",
  "back-end",
  "full-stack",
  "animation",
  "prisma",
  "tailwindcss",
  "nextjs",
  "react",
  "graphQL",
  "postgres",
  "nextjs",
  "ecommerce",
  "supabase",
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
    title: "Invoice Generator",
    tags: ["typescript", "front-end", "react"],
    repo: `${myGithub}/invoice-generator`,
    live: "https://invoice-generator.vercel.app",
    image: placeholderimage,
  },
  {
    title: "Nice Dist Co",
    tags: ["typescript", "front-end", "nextjs", "tailwindcss"],
    repo: `${myGithub}/nice-dist-co`,
    live: "https://nice-dist-co.vercel.app",
    image: placeholderimage,
  },
  {
    title: "JCC Sports League",
    tags: [
      "typescript",
      "front-end",
      "tailwindcss",
      "nextjs",
      "typescript",
      "API",
    ],
    repo: `${myGithub}/jcc-sports-league`,
    live: "https://sports-league.vercel.app",
    image: placeholderimage,
  },
  {
    title: "Tennis Pickup",
    tags: ["typescript", "front-end", "HTML & CSS", "animation"],
    repo: `${myGithub}/tennis-pickup`,
    live: "https://social-proof-section-master-nine.netlify.app",
    image: placeholderimage,
  },
  {
    title: "thien-ui",
    tags: ["typescript", "front-end", "react", "storybook"],
    repo: `${myGithub}/stats-preview-card-component-main`,
    live: "https://stats-preview-card-component-main-imadatyatalah.netlify.app",
    image: placeholderimage,
  },
  {
    title: "Discord Bot",
    tags: ["discord", "front-end", "javascript", "typescript", "full-stack"],
    repo: `${myGithub}/sunnyside-agency-landing-page-main`,
    live: "https://sunnyside-agency-landing-page-imadatyatalah.netlify.app",
    image: placeholderimage,
  },
  {
    title: "Portfolio",
    tags: ["typescript", "front-end", "javascript"],
    repo: `${myGithub}/portfolio`,
    live: "https://portfolio.netlify.app/",
    image: placeholderimage,
  },
  {
    title: "Dashboard",
    tags: ["tailwindcss", "full-stack", "react", "supabase", "typescript"],
    repo: `${myGithub}/time-tracking-dashboard-main`,
    live: "https://time-tracking-dashboard-main.netlify.app",
    image: placeholderimage,
  },

];