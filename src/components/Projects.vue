<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  icon: string;
}

const isVisible = ref(false);
const sectionRef = ref<HTMLElement | null>(null);
const hoveredProject = ref<number | null>(null);
let observer: IntersectionObserver | null = null;

const projects: Project[] = [
  {
    title: "Fuel Delivery Platform",
    description:
      "A full-stack platform for ordering and managing fuel deliveries with role-based access control, real-time tracking, and payment integration.",
    tech: ["Vue", "TypeScript", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/fuel-delivery",
    demo: "",
    icon: "◪",
  },
  {
    title: "Mental Health Journal App",
    description:
      "A journaling app that allows users to track moods, activities, and receive AI-powered insights for better mental wellness.",
    tech: ["Vue", "TypeScript", "Tailwind", "AI"],
    github: "https://github.com/yourusername/journal-app",
    icon: "◉",
  },
];

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true;
        observer?.disconnect();
      }
    },
    { threshold: 0.25 }
  );

  if (sectionRef.value) observer.observe(sectionRef.value);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <section
    ref="sectionRef"
    id="projects"
    class="relative overflow-hidden px-6 md:px-12 lg:px-24 py-28 md:py-0 "
  >
    <!-- Background Accent -->
    <div class="absolute top-1/4 left-0 w-96 h-96 rounded-full border border-zinc-800/50 -translate-x-1/2" />

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-zinc-900 border border-zinc-800 transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <span class="w-2 h-2 bg-emerald-400 rounded-full" />
          <span class="text-sm text-zinc-500 uppercase tracking-wider">My Work</span>
        </div>

        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700 delay-100"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          Featured Projects
        </h2>

        <p
          class="text-xl text-zinc-400 max-w-2xl mt-2 transition-all duration-700 delay-200"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          A selection of projects showcasing my expertise in building modern web applications.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid lg:grid-cols-2 gap-8">
        <article
          v-for="(project, index) in projects"
          :key="project.title"
          @mouseenter="hoveredProject = index"
          @mouseleave="hoveredProject = null"
          class="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800 transition-all duration-500 transform hover:-translate-y-2 hover:border-emerald-400/30"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          :style="{ transitionDelay: `${300 + index * 150}ms` }"
        >
          <!-- Hover Glow Effect -->
          <div class="absolute inset-0 bg-emerald-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

          <!-- Preview Area -->
          <div class="relative h-64 bg-zinc-950 flex items-center justify-center overflow-hidden">
            <div
              class="text-7xl text-emerald-400/20 mb-4 transition-all duration-500"
              :class="hoveredProject === index ? 'scale-110 text-emerald-400/40' : ''"
            >
              {{ project.icon }}
            </div>
            <span class="text-zinc-600 text-sm">Project Screenshot</span>

            <!-- Overlay Gradient -->
            <div class="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-60"></div>

            <!-- Corner Badge -->
            <div class="absolute top-4 right-4 px-3 py-1 bg-zinc-900/90 backdrop-blur border border-zinc-800 rounded-full">
              <span class="text-xs text-emerald-400 font-medium">Featured</span>
            </div>
          </div>

          <!-- Content -->
          <div class="relative p-8">
            <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors duration-300">
              {{ project.title }}
            </h3>
            <p class="text-zinc-400 leading-relaxed mb-6">{{ project.description }}</p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2 mb-6">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-zinc-400 text-sm font-medium hover:border-emerald-400/30 hover:text-emerald-400 transition-all duration-300"
              >
                {{ tech }}
              </span>
            </div>

            <!-- Links -->
            <div class="flex gap-4">
              <a
                :href="project.github"
                target="_blank"
                class="group/link flex items-center gap-2 px-6 py-3 bg-zinc-950 border border-zinc-800 rounded-xl text-white font-medium hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                <span>GitHub</span>
              </a>

              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                class="group/link flex items-center gap-2 px-6 py-3 bg-emerald-400 text-zinc-900 rounded-xl font-medium hover:bg-emerald-300 transition-all duration-300 hover:scale-105"
              >
                <span>Live Demo</span>
                <svg
                  class="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Bottom Accent Line -->
          <div class="absolute bottom-0 left-0 right-0 h-1 bg-emerald-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
        </article>
      </div>

      <!-- View More CTA -->
      <div
        class="mt-16 text-center transition-all duration-700 delay-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <a
          href="https://github.com/yourusername"
          target="_blank"
          class="group inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-zinc-800 text-white rounded-xl font-semibold hover:border-emerald-400 hover:text-emerald-400 transition-all duration-300 hover:scale-105"
        >
          <span>View All Projects</span>
          <svg
            class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>
