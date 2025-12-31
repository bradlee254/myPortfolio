export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 0,
    title: "Fuel Delivery Platform",
    description:
      "A full-stack platform for ordering and managing fuel deliveries with role-based access.",
    tech: ["Vue", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/fuel-delivery",
  },
  {
    id: 1,
    title: "Mental Health Journal App",
    description:
      "A journaling app that allows users to track moods, activities, and receive insights.",
    tech: ["Vue", "TypeScript", "Tailwind", "AI"],
    github: "https://github.com/yourusername/journal-app",
  },
];
