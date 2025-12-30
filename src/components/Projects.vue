
<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

const projects: Project[] = [
  {
    title: "Fuel Delivery Platform",
    description:
      "A full-stack platform for ordering and managing fuel deliveries with role-based access.",
    tech: ["Vue", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/fuel-delivery",
    demo: "",
  },
  {
    title: "Mental Health Journal App",
    description:
      "A journaling app that allows users to track moods, activities, and receive insights.",
    tech: ["Vue", "TypeScript", "Tailwind", "AI"],
    github: "https://github.com/yourusername/journal-app",
  },
];
</script>

<template>
  <section
    id="projects"
    class="py-24 border-t border-white/10"
  >
    <div class="max-w-6xl mx-auto px-6">
      <!-- Heading -->
      <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">
          Projects
        </h2>
        <p class="text-zinc-400 max-w-xl">
          A selection of projects I’ve worked on, showcasing my skills and experience.
        </p>
      </div>

      <!-- Projects grid -->
      <div class="grid md:grid-cols-2 gap-8">
        <article
          v-for="project in projects"
          :key="project.title"
          class="rounded-xl overflow-hidden bg-zinc-900 border border-white/10 hover:border-emerald-500/40 transition"
        >
          <!-- Image -->
          <div class="h-48 bg-zinc-800 flex items-center justify-center">
            <span class="text-zinc-500 text-sm">
              Project Screenshot
            </span>
          </div>

          <!-- Content -->
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">
              {{ project.title }}
            </h3>

            <p class="text-zinc-400 text-sm mb-4">
              {{ project.description }}
            </p>

            <!-- Tech stack -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex gap-4 text-sm">
              <a
                :href="project.github"
                target="_blank"
                class="text-emerald-400 hover:underline"
              >
                GitHub
              </a>

              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="text-zinc-300 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

