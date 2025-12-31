<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const isVisible = ref(false);
const sectionRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

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

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
});

const stats = [
  { value: "2+", label: "Years Experience", icon: "◷" },
  { value: "5+", label: "Projects Completed", icon: "◪" },
  { value: "Frontend", label: "Vue • TS • Tailwind", icon: "◈" },
  { value: "Backend", label: "Node • MongoDB", icon: "◉" },
];
</script>

<template>
  <section
    ref="sectionRef"
    id="about"
    class="relative overflow-hidden
           px-6 md:px-12 lg:px-24
           py-28 md:py-0"
  >
    <!-- Background accent -->
    <div
      class="absolute top-0 right-0 w-96 h-96 rounded-full
             border border-zinc-800/50
             -translate-y-1/2 translate-x-1/2"
    />

    <div class="relative z-10 max-w-6xl mx-auto">
      <!-- Header -->
      <div class="mb-16">
        <div
          class="inline-flex items-center gap-2 px-4 py-2 mb-6
                 rounded-full bg-zinc-900 border border-zinc-800
                 transition-all duration-700"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
        >
          <span class="w-2 h-2 bg-emerald-400 rounded-full" />
          <span class="text-sm text-zinc-500 uppercase tracking-wider">
            About Me
          </span>
        </div>

        <h2
          class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight
                 transition-all duration-700 delay-100"
          :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
        >
          Building digital products with
          <span class="text-emerald-400"> passion & precision</span>
        </h2>
      </div>

      <div class="grid lg:grid-cols-2 gap-16 items-start">
        <!-- Text -->
        <div class="space-y-6">
          <p
            class="text-xl text-zinc-400 leading-relaxed
                   transition-all duration-700 delay-200"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            I'm a software engineer focused on building clean, scalable,
            and user-friendly web applications.
          </p>

          <p
            class="text-lg text-zinc-500 leading-relaxed
                   transition-all duration-700 delay-300"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            I specialize in frontend development using
            <span class="text-white font-medium">
              Vue, TypeScript, and Tailwind CSS
            </span>,
            and I also build backend APIs with
            <span class="text-white font-medium">
              Node.js and MongoDB
            </span>.
          </p>

          <p
            class="text-lg text-zinc-500 leading-relaxed
                   transition-all duration-700 delay-400"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            I enjoy solving real-world problems, learning new technologies,
            and continuously improving my craft.
          </p>

          <div
            class="pt-6 transition-all duration-700 delay-500"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
          >
            <button
              class="group flex items-center gap-3
                     text-emerald-400 font-semibold
                     transition-all duration-300 hover:gap-4"
            >
              <span>Download Resume</span>
              <svg
                class="w-5 h-5 transition-transform duration-300
                       group-hover:translate-y-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="(stat, index) in stats"
            :key="stat.label"
            class="group relative p-6 rounded-2xl
                   bg-zinc-900 border border-zinc-800
                   transition-all duration-500
                   hover:border-emerald-400/30"
            :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
            :style="{ transitionDelay: `${600 + index * 120}ms` }"
          >
            <div
              class="text-3xl mb-4 text-emerald-400/20
                     group-hover:text-emerald-400/40
                     transition-colors duration-300"
            >
              {{ stat.icon }}
            </div>

            <h3
              class="text-2xl md:text-3xl font-bold mb-2
                     transition-colors duration-300
                     group-hover:text-emerald-400"
            >
              {{ stat.value }}
            </h3>

            <p class="text-sm text-zinc-500 leading-tight">
              {{ stat.label }}
            </p>

            <span
              class="absolute inset-0 rounded-2xl
                     bg-emerald-400/5 opacity-0
                     group-hover:opacity-100
                     transition-opacity duration-300
                     pointer-events-none"
            />
          </div>
        </div>
      </div>

      <!-- Bottom accent -->
      <div
        class="mt-16 flex items-center gap-4
               transition-all duration-700 delay-700"
        :class="isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
      >
        <div class="h-px flex-1 bg-zinc-800" />
        <div class="flex gap-2">
          <span class="w-2 h-2 bg-zinc-800 rounded-full" />
          <span class="w-2 h-2 bg-emerald-400 rounded-full" />
          <span class="w-2 h-2 bg-zinc-800 rounded-full" />
        </div>
        <div class="h-px flex-1 bg-zinc-800" />
      </div>
    </div>
  </section>
</template>
