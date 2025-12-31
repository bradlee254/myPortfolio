
<script setup lang="ts">
import { useRoute } from "vue-router";

interface NavLink {
  label: string;
  to: string;
}

const route = useRoute();

const links: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];

const isActive = (path: string) => {
  if (path === "/") return route.path === "/";
  return route.path.startsWith(path);
};
</script>

<template>
  <header
    class="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur border-b border-white/10"
  >
    <nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
      <!-- Logo -->
      <RouterLink
        to="/"
        class="text-xl font-bold text-emerald-400"
      >
        Bashir<span class="text-white">.</span>
      </RouterLink>

      <!-- Navigation -->
      <ul class="hidden md:flex items-center gap-8 text-sm">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            :to="link.to"
            class="transition"
            :class="isActive(link.to)
              ? 'text-white'
              : 'text-zinc-400 hover:text-white'"
          >
            {{ link.label }}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>


