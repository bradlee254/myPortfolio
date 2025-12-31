<template>
  <section class="min-h-screen py-24">
    <div class="max-w-4xl mx-auto px-6">
      <RouterLink
        to="/projects"
        class="text-sm text-emerald-400 hover:underline"
      >
        ← Back to projects
      </RouterLink>

      <h1 class="text-4xl font-bold mt-6 mb-4">
        {{ project.title }}
      </h1>

      <p class="text-zinc-400 mb-6">
        {{ project.description }}
      </p>

      <div class="flex gap-2 mb-8">
        <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-3 py-1 text-xs rounded-full bg-zinc-800"
        >
          {{ tech }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import { projects } from "../data/projects";

const route = useRoute();
const project = computed(() => projects[Number(route.params.id)]);
</script>
